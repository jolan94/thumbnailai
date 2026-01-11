"use client";

import { Card } from "@/components/ui/card";
import { StoreBadges } from "@/components/ui/store-badges";
import { Sparkles } from "lucide-react";

interface ArticleCTAProps {
    title?: string;
    description?: string;
}

export function ArticleCTA({
    title = "Ready to Create Better Thumbnails?",
    description = "Try Thumbly free — generate professional thumbnails in seconds using AI. No design skills needed."
}: ArticleCTAProps) {
    return (
        <Card className="p-8 my-12 bg-gradient-to-br from-accent/5 via-purple-500/5 to-pink-500/5 border-accent/20">
            <div className="text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
                    <Sparkles className="w-4 h-4" />
                    Free to try
                </div>
                <h3 className="text-2xl font-bold mb-3">{title}</h3>
                <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
                    {description}
                </p>
                <StoreBadges size="md" />
            </div>
        </Card>
    );
}
