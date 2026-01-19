"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, ImagePlus, Hash } from "lucide-react";
import { GenerateButton } from "./GenerateButton";
import { CountSelector } from "./CountSelector";
import { ReferenceUpload } from "./ReferenceUpload";

interface ReferenceImage {
    id: string;
    localPreview: string;
    falUrl?: string;
    isUploading: boolean;
}

interface PromptInputProps {
    value: string;
    onChange: (value: string) => void;
    onGenerate: () => void;
    isLoading?: boolean;
    isCompact?: boolean;
    // New props for reference images and count
    referenceImages?: ReferenceImage[];
    onReferenceImagesChange?: (images: ReferenceImage[]) => void;
    imageCount?: number;
    onImageCountChange?: (count: number) => void;
}

const placeholderHints = [
    "A dramatic gaming thumbnail with neon lights...",
    "Cinematic travel vlog with mountain backdrop...",
    "Tech review thumbnail with glowing product shot...",
    "Cooking video with steam rising from the dish...",
    "Fitness transformation with bold typography...",
];

export function PromptInput({
    value,
    onChange,
    onGenerate,
    isLoading,
    isCompact,
    referenceImages = [],
    onReferenceImagesChange,
    imageCount = 1,
    onImageCountChange,
}: PromptInputProps) {
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const [placeholderIndex] = useState(() => Math.floor(Math.random() * placeholderHints.length));

    // Auto-resize textarea
    useEffect(() => {
        if (textareaRef.current && !isCompact) {
            textareaRef.current.style.height = "auto";
            textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 200)}px`;
        }
    }, [value, isCompact]);

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" && e.metaKey) {
            e.preventDefault();
            onGenerate();
        }
    };

    // Check if any reference images are still uploading
    const isUploading = referenceImages.some((img) => img.isUploading);

    // Compact mode - single line sticky input
    if (isCompact) {
        return (
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="
                    sticky top-0 z-40 
                    bg-white/80 backdrop-blur-xl 
                    border-b border-border/50
                    px-4 py-3
                "
            >
                <div className="max-w-4xl mx-auto flex items-center gap-3">
                    <div className="flex items-center gap-2 text-muted-foreground">
                        <Sparkles className="w-5 h-5" />
                    </div>
                    <input
                        type="text"
                        value={value}
                        onChange={(e) => onChange(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="Describe your thumbnail idea..."
                        className="
                            flex-1 bg-transparent 
                            text-sm font-medium
                            placeholder:text-muted-foreground/50
                            focus:outline-none
                        "
                    />

                    {/* Compact count selector */}
                    {onImageCountChange && (
                        <div className="flex items-center gap-1 text-muted-foreground">
                            <Hash className="w-4 h-4" />
                            <CountSelector
                                value={imageCount}
                                onChange={onImageCountChange}
                                disabled={isLoading}
                            />
                        </div>
                    )}

                    <motion.button
                        onClick={onGenerate}
                        disabled={!value.trim() || isLoading || isUploading}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="
                            px-5 py-2 rounded-xl font-medium text-sm text-white
                            bg-gradient-to-r from-orange-500 to-orange-400
                            hover:from-orange-600 hover:to-orange-500
                            disabled:from-orange-300 disabled:to-orange-200 disabled:cursor-not-allowed
                            transition-all duration-200
                            flex items-center gap-2
                        "
                    >
                        {isLoading ? (
                            <span>Generating...</span>
                        ) : (
                            <>
                                <span>Generate</span>
                                <span className="text-white/70">→</span>
                            </>
                        )}
                    </motion.button>
                </div>
            </motion.div>
        );
    }

    // Expanded mode - large centered prompt
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="w-full max-w-2xl mx-auto"
        >
            <div className="bg-white rounded-3xl border border-border/50 shadow-xl shadow-black/5 p-6 md:p-8">
                <h2 className="text-xl md:text-2xl font-bold mb-4 tracking-tight">
                    Video or Thumbnail Idea
                </h2>

                <div className="relative">
                    <textarea
                        ref={textareaRef}
                        value={value}
                        onChange={(e) => onChange(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder={placeholderHints[placeholderIndex]}
                        rows={3}
                        className="
                            w-full min-h-[100px] max-h-[200px]
                            bg-muted/30 rounded-2xl
                            p-4 resize-none
                            text-foreground placeholder:text-muted-foreground/50
                            border border-transparent
                            focus:border-orange-200 focus:bg-white
                            focus:outline-none focus:ring-2 focus:ring-orange-500/10
                            transition-all duration-200
                        "
                    />
                </div>

                {/* Controls row */}
                <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
                    {/* Left side: Reference images */}
                    <div className="flex items-center gap-3">
                        {onReferenceImagesChange && (
                            <div className="flex items-center gap-2">
                                <span className="text-xs text-muted-foreground font-medium">
                                    Reference
                                </span>
                                <ReferenceUpload
                                    images={referenceImages}
                                    onImagesChange={onReferenceImagesChange}
                                    maxImages={5}
                                    disabled={isLoading}
                                />
                            </div>
                        )}
                    </div>

                    {/* Right side: Count selector */}
                    <div className="flex items-center gap-4">
                        {onImageCountChange && (
                            <div className="flex items-center gap-2">
                                <span className="text-xs text-muted-foreground font-medium">
                                    Count
                                </span>
                                <CountSelector
                                    value={imageCount}
                                    onChange={onImageCountChange}
                                    min={1}
                                    max={4}
                                    disabled={isLoading}
                                />
                            </div>
                        )}
                    </div>
                </div>

                <div className="mt-6">
                    <GenerateButton
                        onClick={onGenerate}
                        isLoading={isLoading}
                        disabled={!value.trim() || isUploading}
                    />
                </div>

                <p className="text-xs text-muted-foreground text-center mt-4">
                    Press <kbd className="px-1.5 py-0.5 bg-muted rounded text-[10px] font-mono">⌘ Enter</kbd> to generate
                </p>
            </div>
        </motion.div>
    );
}
