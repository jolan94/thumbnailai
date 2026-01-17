"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Id } from "../../../convex/_generated/dataModel";

interface Thumbnail {
    _id: Id<"thumbnails">;
    prompt: string;
    imageUrl?: string;
    status: "pending" | "completed" | "failed";
}

interface RecentPreviewProps {
    thumbnails: Thumbnail[];
}

export function RecentPreview({ thumbnails }: RecentPreviewProps) {
    // Only show completed thumbnails
    const completedThumbnails = thumbnails.filter(
        (t) => t.status === "completed" && t.imageUrl
    );

    if (completedThumbnails.length === 0) {
        return null;
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-12"
        >
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-foreground">
                    My Creations
                </h3>
                <span className="text-sm text-muted-foreground">
                    {completedThumbnails.length} thumbnail{completedThumbnails.length !== 1 ? "s" : ""}
                </span>
            </div>

            <div className="flex gap-4 overflow-x-auto pb-2 -mx-2 px-2 scrollbar-hide">
                {completedThumbnails.slice(0, 5).map((thumbnail, index) => (
                    <motion.div
                        key={thumbnail._id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex-shrink-0 w-48 md:w-56"
                    >
                        <div className="aspect-video rounded-xl overflow-hidden bg-muted relative group cursor-pointer">
                            {thumbnail.imageUrl ? (
                                <Image
                                    src={thumbnail.imageUrl}
                                    alt={thumbnail.prompt}
                                    fill
                                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                            ) : (
                                <div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-300" />
                            )}
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}
