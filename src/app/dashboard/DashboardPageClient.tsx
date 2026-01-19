"use client";

import { useState, useEffect, useCallback } from "react";
import { useQuery, useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { Id } from "../../../convex/_generated/dataModel";
import {
    DashboardHeader,
    PromptInput,
    ThumbnailFeed,
    RecentPreview,
} from "@/components/dashboard";
import { motion, AnimatePresence } from "framer-motion";
import { generateThumbnail } from "@/lib/fal";

interface ReferenceImage {
    id: string;
    localPreview: string;
    falUrl?: string;
    isUploading: boolean;
}

export default function DashboardPageClient() {
    const [prompt, setPrompt] = useState("");
    const [isGenerating, setIsGenerating] = useState(false);
    const [newestId, setNewestId] = useState<Id<"thumbnails"> | undefined>();
    const [hasScrolledPastPrompt, setHasScrolledPastPrompt] = useState(false);
    const [isDragging, setIsDragging] = useState(false);

    // New state for reference images and count
    const [referenceImages, setReferenceImages] = useState<ReferenceImage[]>([]);
    const [imageCount, setImageCount] = useState(1);

    // Convex queries and mutations
    const thumbnails = useQuery(api.thumbnails.list, { limit: 50 }) ?? [];
    const recentThumbnails = useQuery(api.thumbnails.recent, {}) ?? [];
    const createThumbnail = useMutation(api.thumbnails.create);
    const updateThumbnailStatus = useMutation(api.thumbnails.updateStatus);

    // Determine if we have results to show
    const hasResults = thumbnails.length > 0;

    // Handle scroll to switch to compact mode
    useEffect(() => {
        if (!hasResults) {
            setHasScrolledPastPrompt(false);
            return;
        }

        const handleScroll = () => {
            const scrollY = window.scrollY;
            setHasScrolledPastPrompt(scrollY > 100);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [hasResults]);

    // Drag and Drop handlers
    const handleDragOver = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (!isDragging) setIsDragging(true);
    }, [isDragging]);

    const handleDragLeave = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        // Only set dragging to false if we're leaving the window or the main container
        if (e.relatedTarget === null) {
            setIsDragging(false);
        }
    }, []);

    const processFiles = useCallback(async (files: FileList) => {
        const maxImages = 5;
        const currentCount = referenceImages.length;
        const remainingSlots = maxImages - currentCount;

        if (remainingSlots <= 0) return;

        const filesToProcess = Array.from(files)
            .filter(file => file.type.startsWith('image/'))
            .slice(0, remainingSlots);

        if (filesToProcess.length === 0) return;

        // Process each file
        for (const file of filesToProcess) {
            // Read file as base64
            const base64 = await new Promise<string>((resolve) => {
                const reader = new FileReader();
                reader.onload = (event) => resolve(event.target?.result as string);
                reader.readAsDataURL(file);
            });

            const tempId = `temp-${Date.now()}-${Math.random()}`;

            // Add with local preview immediately
            const newImage: ReferenceImage = {
                id: tempId,
                localPreview: base64,
                isUploading: true,
            };

            // Update state
            setReferenceImages(prev => [...prev, newImage]);

            // Import dynamically to avoid circular dependencies if any, 
            // or just use the imported function if it was added to imports.
            // Assuming uploadReferenceImage is available from @/lib/fal
            const { uploadReferenceImage } = await import("@/lib/fal");
            const result = await uploadReferenceImage(base64, file.name);

            if (result.success) {
                setReferenceImages(prev => prev.map(img =>
                    img.id === tempId
                        ? { ...img, falUrl: result.url, isUploading: false }
                        : img
                ));
            } else {
                setReferenceImages(prev => prev.filter(img => img.id !== tempId));
            }
        }
    }, [referenceImages.length]);

    const handleDrop = useCallback(async (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);

        const files = e.dataTransfer.files;
        if (files && files.length > 0) {
            await processFiles(files);
        }
    }, [processFiles]);


    // Handle generate action
    const handleGenerate = useCallback(async () => {
        if (!prompt.trim() || isGenerating) return;

        // Check if any reference images are still uploading
        const isUploading = referenceImages.some((img) => img.isUploading);
        if (isUploading) return;

        setIsGenerating(true);
        const currentPrompt = prompt.trim();

        // Get reference image URLs (only those that have been uploaded)
        const referenceUrls = referenceImages
            .filter((img) => img.falUrl)
            .map((img) => img.falUrl!);

        try {
            // Create pending thumbnails for each image we're generating
            const thumbnailIds: Id<"thumbnails">[] = [];
            for (let i = 0; i < imageCount; i++) {
                const id = await createThumbnail({ prompt: currentPrompt });
                thumbnailIds.push(id);
            }
            setNewestId(thumbnailIds[0]);

            // Generate thumbnails using fal.ai
            const result = await generateThumbnail({
                prompt: currentPrompt,
                numImages: imageCount,
                referenceImageUrls: referenceUrls.length > 0 ? referenceUrls : undefined,
            });

            if (result.success && result.images.length > 0) {
                // Update each thumbnail with its generated image
                for (let i = 0; i < result.images.length; i++) {
                    const thumbnailId = thumbnailIds[i];
                    const generatedImage = result.images[i];

                    if (thumbnailId && generatedImage) {
                        await updateThumbnailStatus({
                            id: thumbnailId,
                            status: "completed",
                            imageUrl: generatedImage.imageUrl,
                        });
                    }
                }

                // Mark any remaining as failed (if we got fewer images than requested)
                for (let i = result.images.length; i < thumbnailIds.length; i++) {
                    await updateThumbnailStatus({
                        id: thumbnailIds[i],
                        status: "failed",
                    });
                }

                // Clear prompt and reference images after successful generation
                setPrompt("");
                setReferenceImages([]);
                setImageCount(1); // Reset count to 1
            } else {
                // Mark all as failed
                for (const id of thumbnailIds) {
                    await updateThumbnailStatus({
                        id,
                        status: "failed",
                    });
                }
                console.error("Generation failed:", result.error);
            }
        } catch (error) {
            console.error("Generation failed:", error);
        } finally {
            setIsGenerating(false);
        }
    }, [prompt, isGenerating, imageCount, referenceImages, createThumbnail, updateThumbnailStatus]);

    // Show compact mode when scrolled and has results
    const showCompactPrompt = hasResults && hasScrolledPastPrompt;

    return (
        <div
            className="min-h-screen bg-gradient-to-b from-white to-muted/20 dark:from-background dark:to-muted/10 relative"
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
        >
            {/* Drag Overlay */}
            <AnimatePresence>
                {isDragging && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-center justify-center border-4 border-dashed border-primary m-4 rounded-xl"
                    >
                        <div className="text-center pointer-events-none">
                            <div className="text-4xl mb-4">📂</div>
                            <h3 className="text-2xl font-semibold mb-2">Drop images where</h3>
                            <p className="text-muted-foreground">Add reference images for your thumbnail</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <DashboardHeader />

            {/* Compact prompt - sticky at top when scrolled */}
            <AnimatePresence>
                {showCompactPrompt && (
                    <div className="fixed top-14 md:top-16 left-0 right-0 z-40">
                        <PromptInput
                            value={prompt}
                            onChange={setPrompt}
                            onGenerate={handleGenerate}
                            isLoading={isGenerating}
                            isCompact
                            imageCount={imageCount}
                            onImageCountChange={setImageCount}
                        />
                    </div>
                )}
            </AnimatePresence>

            {/* Main content area */}
            <main className="pt-20 md:pt-24 pb-12">
                <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
                    {/* Expanded prompt - shown when no results or at top */}
                    {!hasResults && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="flex flex-col items-center justify-center min-h-[60vh]"
                        >
                            <PromptInput
                                value={prompt}
                                onChange={setPrompt}
                                onGenerate={handleGenerate}
                                isLoading={isGenerating}
                                referenceImages={referenceImages}
                                onReferenceImagesChange={setReferenceImages}
                                imageCount={imageCount}
                                onImageCountChange={setImageCount}
                            />

                            {/* Recent previews below the prompt */}
                            <div className="w-full max-w-4xl">
                                <RecentPreview thumbnails={recentThumbnails} />
                            </div>
                        </motion.div>
                    )}

                    {/* Results view */}
                    {hasResults && (
                        <div className="space-y-8">
                            {/* Show expanded prompt at top when not scrolled */}
                            {!hasScrolledPastPrompt && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="pb-8"
                                >
                                    <PromptInput
                                        value={prompt}
                                        onChange={setPrompt}
                                        onGenerate={handleGenerate}
                                        isLoading={isGenerating}
                                        referenceImages={referenceImages}
                                        onReferenceImagesChange={setReferenceImages}
                                        imageCount={imageCount}
                                        onImageCountChange={setImageCount}
                                    />
                                </motion.div>
                            )}

                            {/* Spacer for sticky header */}
                            {showCompactPrompt && <div className="h-16" />}

                            {/* Thumbnail feed */}
                            <ThumbnailFeed
                                thumbnails={thumbnails}
                                newestId={newestId}
                            />
                        </div>
                    )}
                </div>
            </main>

            {/* Footer */}
            <footer className="py-8 border-t border-border/50">
                <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-center">
                    <p className="text-sm text-muted-foreground">
                        ✨ Powered by AI
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                        © 2026 Thumbly. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
}
