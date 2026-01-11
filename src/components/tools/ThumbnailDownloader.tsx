"use client";

import { useState } from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import {
    Download,
    Search,
    CheckCircle,
    AlertCircle,
    Loader2,
    Image as ImageIcon,
    Copy,
    ExternalLink
} from "lucide-react";

interface ThumbnailResult {
    videoId: string;
    title: string;
    thumbnails: {
        quality: string;
        resolution: string;
        url: string;
    }[];
}

export function ThumbnailDownloader() {
    const [url, setUrl] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [result, setResult] = useState<ThumbnailResult | null>(null);
    const [copiedUrl, setCopiedUrl] = useState<string | null>(null);

    const extractVideoId = (input: string): string | null => {
        // Handle various YouTube URL formats
        const patterns = [
            /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/|youtube\.com\/v\/|youtube\.com\/shorts\/)([a-zA-Z0-9_-]{11})/,
            /^([a-zA-Z0-9_-]{11})$/ // Direct video ID
        ];

        for (const pattern of patterns) {
            const match = input.match(pattern);
            if (match) return match[1];
        }
        return null;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setResult(null);

        const videoId = extractVideoId(url.trim());
        if (!videoId) {
            setError("Please enter a valid YouTube URL or video ID");
            return;
        }

        setLoading(true);

        try {
            // Generate thumbnail URLs directly (no API needed)
            const thumbnails = [
                {
                    quality: "Maximum Resolution",
                    resolution: "1280×720",
                    url: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
                },
                {
                    quality: "Standard Definition",
                    resolution: "640×480",
                    url: `https://img.youtube.com/vi/${videoId}/sddefault.jpg`
                },
                {
                    quality: "High Quality",
                    resolution: "480×360",
                    url: `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
                },
                {
                    quality: "Medium Quality",
                    resolution: "320×180",
                    url: `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`
                },
                {
                    quality: "Default",
                    resolution: "120×90",
                    url: `https://img.youtube.com/vi/${videoId}/default.jpg`
                }
            ];

            setResult({
                videoId,
                title: `Video ID: ${videoId}`,
                thumbnails
            });
        } catch {
            setError("Failed to fetch thumbnail. Please check the URL and try again.");
        } finally {
            setLoading(false);
        }
    };

    const handleDownload = async (imageUrl: string, quality: string) => {
        try {
            const response = await fetch(imageUrl);
            const blob = await response.blob();
            const downloadUrl = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = downloadUrl;
            link.download = `youtube-thumbnail-${result?.videoId}-${quality.toLowerCase().replace(/\s+/g, '-')}.jpg`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            window.URL.revokeObjectURL(downloadUrl);
        } catch {
            // Fallback: open in new tab
            window.open(imageUrl, '_blank');
        }
    };

    const handleCopyUrl = async (imageUrl: string) => {
        try {
            await navigator.clipboard.writeText(imageUrl);
            setCopiedUrl(imageUrl);
            setTimeout(() => setCopiedUrl(null), 2000);
        } catch {
            // Fallback
            const textArea = document.createElement('textarea');
            textArea.value = imageUrl;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            setCopiedUrl(imageUrl);
            setTimeout(() => setCopiedUrl(null), 2000);
        }
    };

    return (
        <div className="space-y-8">
            {/* Search Form */}
            <Card className="p-6">
                <h2 className="font-bold text-lg mb-4 flex items-center gap-2">
                    <Search className="w-5 h-5 text-accent" />
                    Enter YouTube URL
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <input
                            type="text"
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                            placeholder="https://youtube.com/watch?v=... or video ID"
                            className="w-full px-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                        />
                        <p className="text-xs text-muted-foreground mt-2">
                            Supports youtube.com, youtu.be, Shorts URLs, and direct video IDs
                        </p>
                    </div>
                    <button
                        type="submit"
                        disabled={loading || !url.trim()}
                        className="w-full sm:w-auto px-6 py-3 bg-foreground text-background rounded-xl font-medium hover:bg-foreground/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
                    >
                        {loading ? (
                            <>
                                <Loader2 className="w-5 h-5 animate-spin" />
                                Fetching...
                            </>
                        ) : (
                            <>
                                <ImageIcon className="w-5 h-5" />
                                Get Thumbnails
                            </>
                        )}
                    </button>
                </form>

                {error && (
                    <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <p className="text-red-700 text-sm">{error}</p>
                    </div>
                )}
            </Card>

            {/* Results */}
            {result && (
                <div className="space-y-6">
                    <div className="flex items-center gap-2 text-green-600">
                        <CheckCircle className="w-5 h-5" />
                        <span className="font-medium">Thumbnails found!</span>
                    </div>

                    <div className="grid gap-6">
                        {result.thumbnails.map((thumb, index) => (
                            <Card key={index} className="overflow-hidden">
                                <div className="flex flex-col md:flex-row">
                                    {/* Thumbnail Preview */}
                                    <div className="relative w-full md:w-80 aspect-video bg-gray-100 flex-shrink-0">
                                        <Image
                                            src={thumb.url}
                                            alt={`${thumb.quality} thumbnail`}
                                            fill
                                            className="object-cover"
                                            unoptimized
                                        />
                                    </div>

                                    {/* Info & Actions */}
                                    <div className="flex-1 p-4 flex flex-col justify-between">
                                        <div>
                                            <h3 className="font-bold text-lg">{thumb.quality}</h3>
                                            <p className="text-muted-foreground text-sm">{thumb.resolution} pixels</p>
                                        </div>
                                        <div className="flex flex-wrap gap-2 mt-4">
                                            <button
                                                onClick={() => handleDownload(thumb.url, thumb.quality)}
                                                className="px-4 py-2 bg-accent text-white rounded-lg font-medium hover:bg-accent/90 transition-colors flex items-center gap-2"
                                            >
                                                <Download className="w-4 h-4" />
                                                Download
                                            </button>
                                            <button
                                                onClick={() => handleCopyUrl(thumb.url)}
                                                className="px-4 py-2 border border-border rounded-lg font-medium hover:bg-muted transition-colors flex items-center gap-2"
                                            >
                                                <Copy className="w-4 h-4" />
                                                {copiedUrl === thumb.url ? "Copied!" : "Copy URL"}
                                            </button>
                                            <a
                                                href={thumb.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="px-4 py-2 border border-border rounded-lg font-medium hover:bg-muted transition-colors flex items-center gap-2"
                                            >
                                                <ExternalLink className="w-4 h-4" />
                                                Open
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
