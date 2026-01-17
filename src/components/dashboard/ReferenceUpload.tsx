"use client";

import { useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ImagePlus, X, Loader2 } from "lucide-react";
import Image from "next/image";
import { uploadReferenceImage } from "@/lib/fal";

interface ReferenceImage {
    id: string;
    localPreview: string;
    falUrl?: string;
    isUploading: boolean;
}

interface ReferenceUploadProps {
    images: ReferenceImage[];
    onImagesChange: (images: ReferenceImage[]) => void;
    maxImages?: number;
    disabled?: boolean;
}

export function ReferenceUpload({
    images,
    onImagesChange,
    maxImages = 3,
    disabled,
}: ReferenceUploadProps) {
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (!files || files.length === 0) return;

        const remainingSlots = maxImages - images.length;
        const filesToProcess = Array.from(files).slice(0, remainingSlots);

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

            // Get current images and add new one
            const currentImages = [...images, newImage];
            onImagesChange(currentImages);

            // Upload to fal.ai  
            const result = await uploadReferenceImage(base64, file.name);

            if (result.success) {
                // Update the image with fal URL
                const updatedImages = currentImages.map((img) =>
                    img.id === tempId
                        ? { ...img, falUrl: result.url, isUploading: false }
                        : img
                );
                onImagesChange(updatedImages);
            } else {
                // Remove failed upload
                const filteredImages = currentImages.filter((img) => img.id !== tempId);
                onImagesChange(filteredImages);
            }
        }

        // Reset input
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };

    const removeImage = (id: string) => {
        onImagesChange(images.filter((img) => img.id !== id));
    };

    const canAddMore = images.length < maxImages && !disabled;

    return (
        <div className="flex items-center gap-2">
            <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                multiple
                onChange={handleFileSelect}
                className="hidden"
                disabled={!canAddMore}
            />

            {/* Existing images */}
            <AnimatePresence mode="popLayout">
                {images.map((image) => (
                    <motion.div
                        key={image.id}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="relative w-12 h-12 rounded-lg overflow-hidden bg-muted"
                    >
                        <Image
                            src={image.localPreview}
                            alt="Reference"
                            fill
                            className="object-cover"
                        />

                        {image.isUploading ? (
                            <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                                <Loader2 className="w-4 h-4 text-white animate-spin" />
                            </div>
                        ) : (
                            <button
                                type="button"
                                onClick={() => removeImage(image.id)}
                                className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 hover:opacity-100 transition-opacity"
                            >
                                <X className="w-3 h-3" />
                            </button>
                        )}
                    </motion.div>
                ))}
            </AnimatePresence>

            {/* Add button */}
            {canAddMore && (
                <motion.button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="
                        w-12 h-12 rounded-lg
                        border-2 border-dashed border-muted-foreground/30
                        flex items-center justify-center
                        hover:border-muted-foreground/50 hover:bg-muted/50
                        transition-colors
                    "
                >
                    <ImagePlus className="w-5 h-5 text-muted-foreground" />
                </motion.button>
            )}

            {images.length > 0 && (
                <span className="text-xs text-muted-foreground ml-1">
                    {images.length}/{maxImages}
                </span>
            )}
        </div>
    );
}
