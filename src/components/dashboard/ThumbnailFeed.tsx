"use client";

import { motion } from "framer-motion";
import { ThumbnailCard } from "./ThumbnailCard";
import { Id } from "../../../convex/_generated/dataModel";

interface Thumbnail {
    _id: Id<"thumbnails">;
    prompt: string;
    imageUrl?: string;
    status: "pending" | "completed" | "failed";
    createdAt: number;
}

interface ThumbnailFeedProps {
    thumbnails: Thumbnail[];
    newestId?: Id<"thumbnails">;
}

export function ThumbnailFeed({ thumbnails, newestId }: ThumbnailFeedProps) {
    if (thumbnails.length === 0) {
        return null;
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="w-full"
        >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {thumbnails.map((thumbnail, index) => (
                    <ThumbnailCard
                        key={thumbnail._id}
                        id={thumbnail._id}
                        prompt={thumbnail.prompt}
                        imageUrl={thumbnail.imageUrl}
                        status={thumbnail.status}
                        isNew={thumbnail._id === newestId}
                        index={index}
                    />
                ))}
            </div>

            {/* Load more indicator (can be enhanced with pagination) */}
            {thumbnails.length >= 50 && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex justify-center mt-8"
                >
                    <button className="px-6 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                        Load more creations
                    </button>
                </motion.div>
            )}
        </motion.div>
    );
}
