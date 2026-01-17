"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Loader2 } from "lucide-react";

interface ThumbnailCardProps {
    id: string;
    prompt: string;
    imageUrl?: string;
    status: "pending" | "completed" | "failed";
    isNew?: boolean;
    index?: number;
}

export function ThumbnailCard({
    prompt,
    imageUrl,
    status,
    isNew,
    index = 0,
}: ThumbnailCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
                duration: 0.4,
                delay: index * 0.05,
                ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="relative group"
        >
            {/* 16:9 Aspect Ratio Container */}
            <div className="aspect-video rounded-2xl overflow-hidden bg-muted relative">
                {status === "pending" ? (
                    // Loading skeleton
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-muted to-muted/50">
                        <div className="flex flex-col items-center gap-3">
                            <Loader2 className="w-8 h-8 text-orange-500 animate-spin" />
                            <span className="text-sm text-muted-foreground font-medium">
                                Generating...
                            </span>
                        </div>
                        {/* Animated pulse overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />
                    </div>
                ) : status === "failed" ? (
                    // Error state
                    <div className="absolute inset-0 flex items-center justify-center bg-red-50">
                        <span className="text-sm text-red-500 font-medium">
                            Generation failed
                        </span>
                    </div>
                ) : imageUrl ? (
                    // Completed thumbnail
                    <Image
                        src={imageUrl}
                        alt={prompt}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                ) : (
                    // Placeholder for mock data
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center">
                        <span className="text-sm text-slate-500 font-medium px-4 text-center">
                            {prompt.slice(0, 50)}...
                        </span>
                    </div>
                )}

                {/* NEW badge */}
                {isNew && status === "completed" && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="absolute top-3 left-3 px-2.5 py-1 bg-orange-500 text-white text-xs font-bold rounded-full shadow-lg"
                    >
                        NEW
                    </motion.div>
                )}

                {/* Hover overlay */}
                {status === "completed" && (
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-200" />
                )}
            </div>

            {/* Prompt preview on hover */}
            {status === "completed" && (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                >
                    <p className="text-white text-sm font-medium line-clamp-2">
                        {prompt}
                    </p>
                </motion.div>
            )}
        </motion.div>
    );
}
