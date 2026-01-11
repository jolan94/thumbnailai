"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Upload, Monitor, Smartphone, LayoutGrid, X, CheckCircle, AlertCircle } from "lucide-react";

type PreviewMode = "desktop" | "mobile" | "feed";

export function ThumbnailPreviewTool() {
    const [uploadedImage, setUploadedImage] = useState<string | null>(null);
    const [activePreview, setActivePreview] = useState<PreviewMode>("desktop");
    const [isDragging, setIsDragging] = useState(false);
    const [imageInfo, setImageInfo] = useState<{ width: number; height: number; size: string } | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFile = useCallback((file: File) => {
        if (!file.type.startsWith("image/")) {
            alert("Please upload an image file");
            return;
        }

        const reader = new FileReader();
        reader.onload = (e) => {
            const dataUrl = e.target?.result as string;
            setUploadedImage(dataUrl);

            // Get image dimensions
            const img = new window.Image();
            img.onload = () => {
                setImageInfo({
                    width: img.width,
                    height: img.height,
                    size: (file.size / 1024).toFixed(1) + " KB"
                });
            };
            img.src = dataUrl;
        };
        reader.readAsDataURL(file);
    }, []);

    const handleDrop = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);

        const file = e.dataTransfer.files[0];
        if (file) handleFile(file);
    }, [handleFile]);

    const handleDragOver = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(true);
    }, []);

    const handleDragLeave = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
    }, []);

    const handleFileInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) handleFile(file);
    }, [handleFile]);

    const clearImage = () => {
        setUploadedImage(null);
        setImageInfo(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };

    const isCorrectSize = imageInfo && imageInfo.width === 1280 && imageInfo.height === 720;
    const isCorrectAspectRatio = imageInfo && Math.abs((imageInfo.width / imageInfo.height) - (16 / 9)) < 0.01;

    return (
        <div className="space-y-8">
            {/* Upload Section */}
            <Card className="p-8">
                <h2 className="text-2xl font-bold mb-6">Upload Your Thumbnail</h2>

                <div
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onClick={() => fileInputRef.current?.click()}
                    className={`relative border-2 border-dashed rounded-xl p-12 text-center cursor-pointer transition-all ${isDragging
                            ? "border-accent bg-accent/5"
                            : "border-gray-300 hover:border-accent hover:bg-accent/5"
                        }`}
                >
                    <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        onChange={handleFileInput}
                        className="hidden"
                    />

                    {uploadedImage ? (
                        <div className="space-y-4">
                            <div className="relative w-full max-w-md mx-auto aspect-video rounded-lg overflow-hidden bg-gray-100">
                                <Image
                                    src={uploadedImage}
                                    alt="Uploaded thumbnail"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    clearImage();
                                }}
                                className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm transition-colors"
                            >
                                <X className="w-4 h-4" />
                                Remove and upload new
                            </button>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            <div className="w-16 h-16 mx-auto bg-accent/10 rounded-full flex items-center justify-center">
                                <Upload className="w-8 h-8 text-accent" />
                            </div>
                            <div>
                                <p className="text-lg font-medium">Drop your thumbnail here</p>
                                <p className="text-sm text-muted-foreground mt-1">or click to browse</p>
                            </div>
                            <p className="text-xs text-muted-foreground">
                                Supports JPG, PNG, GIF • Max 2MB recommended
                            </p>
                        </div>
                    )}
                </div>

                {/* Image Info */}
                {imageInfo && (
                    <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                        <h3 className="font-semibold mb-3">Image Analysis</h3>
                        <div className="grid grid-cols-3 gap-4 text-sm">
                            <div className="flex items-center gap-2">
                                {isCorrectSize ? (
                                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                                ) : (
                                    <AlertCircle className="w-4 h-4 text-amber-500 flex-shrink-0" />
                                )}
                                <span>
                                    <strong>Size:</strong> {imageInfo.width}×{imageInfo.height}
                                    {!isCorrectSize && <span className="text-amber-600 ml-1">(Recommended: 1280×720)</span>}
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                {isCorrectAspectRatio ? (
                                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                                ) : (
                                    <AlertCircle className="w-4 h-4 text-amber-500 flex-shrink-0" />
                                )}
                                <span>
                                    <strong>Aspect Ratio:</strong> {(imageInfo.width / imageInfo.height).toFixed(2)}:1
                                    {!isCorrectAspectRatio && <span className="text-amber-600 ml-1">(Recommended: 16:9)</span>}
                                </span>
                            </div>
                            <div>
                                <strong>File Size:</strong> {imageInfo.size}
                            </div>
                        </div>
                    </div>
                )}
            </Card>

            {/* Preview Section */}
            {uploadedImage && (
                <Card className="p-8">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                        <h2 className="text-2xl font-bold">Preview Your Thumbnail</h2>

                        {/* Preview Mode Tabs */}
                        <div className="flex bg-gray-100 rounded-lg p-1">
                            {[
                                { mode: "desktop" as const, icon: Monitor, label: "Desktop" },
                                { mode: "mobile" as const, icon: Smartphone, label: "Mobile" },
                                { mode: "feed" as const, icon: LayoutGrid, label: "Feed" },
                            ].map(({ mode, icon: Icon, label }) => (
                                <button
                                    key={mode}
                                    onClick={() => setActivePreview(mode)}
                                    className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all ${activePreview === mode
                                            ? "bg-white shadow text-foreground"
                                            : "text-muted-foreground hover:text-foreground"
                                        }`}
                                >
                                    <Icon className="w-4 h-4" />
                                    {label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Preview Display */}
                    <div className="flex justify-center">
                        {activePreview === "desktop" && (
                            <DesktopPreview image={uploadedImage} />
                        )}
                        {activePreview === "mobile" && (
                            <MobilePreview image={uploadedImage} />
                        )}
                        {activePreview === "feed" && (
                            <FeedPreview image={uploadedImage} />
                        )}
                    </div>
                </Card>
            )}
        </div>
    );
}

function DesktopPreview({ image }: { image: string }) {
    return (
        <div className="w-full max-w-3xl">
            <p className="text-sm text-muted-foreground mb-3 text-center">Desktop Video Player View</p>
            <div className="bg-black rounded-lg overflow-hidden shadow-2xl">
                {/* Video Player */}
                <div className="relative aspect-video">
                    <Image src={image} alt="Desktop preview" fill className="object-cover" />
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 bg-black/60 rounded-full flex items-center justify-center">
                            <div className="w-0 h-0 border-l-[24px] border-l-white border-y-[14px] border-y-transparent ml-2" />
                        </div>
                    </div>
                </div>
                {/* Player Controls */}
                <div className="bg-gray-900 px-4 py-3">
                    <div className="h-1 bg-gray-700 rounded-full mb-3">
                        <div className="h-1 w-0 bg-red-600 rounded-full" />
                    </div>
                    <div className="flex items-center justify-between text-white text-xs">
                        <span>0:00 / 10:24</span>
                        <div className="flex items-center gap-4">
                            <span className="opacity-60">HD</span>
                            <span className="opacity-60">⚙️</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function MobilePreview({ image }: { image: string }) {
    return (
        <div className="w-full max-w-xs">
            <p className="text-sm text-muted-foreground mb-3 text-center">Mobile Video Player View</p>
            <div className="bg-gray-900 rounded-[2rem] p-2 shadow-2xl">
                <div className="bg-black rounded-[1.5rem] overflow-hidden">
                    {/* Status Bar */}
                    <div className="bg-black px-4 py-2 flex justify-between text-white text-xs">
                        <span>9:41</span>
                        <div className="flex items-center gap-1">
                            <span>📶</span>
                            <span>🔋</span>
                        </div>
                    </div>
                    {/* Video */}
                    <div className="relative aspect-video">
                        <Image src={image} alt="Mobile preview" fill className="object-cover" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-14 h-14 bg-black/60 rounded-full flex items-center justify-center">
                                <div className="w-0 h-0 border-l-[16px] border-l-white border-y-[10px] border-y-transparent ml-1" />
                            </div>
                        </div>
                    </div>
                    {/* Video Info */}
                    <div className="bg-white p-4">
                        <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
                        <div className="h-3 bg-gray-100 rounded w-1/2" />
                    </div>
                </div>
            </div>
        </div>
    );
}

function FeedPreview({ image }: { image: string }) {
    return (
        <div className="w-full max-w-2xl">
            <p className="text-sm text-muted-foreground mb-3 text-center">YouTube Home Feed View</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Main Thumbnail */}
                <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                    <div className="relative aspect-video">
                        <Image src={image} alt="Feed preview" fill className="object-cover" />
                        <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-1.5 py-0.5 rounded">
                            10:24
                        </div>
                    </div>
                    <div className="p-3">
                        <div className="flex gap-3">
                            <div className="w-9 h-9 bg-gradient-to-br from-accent to-pink-500 rounded-full flex-shrink-0" />
                            <div className="flex-1 min-w-0">
                                <div className="font-medium text-sm line-clamp-2 mb-1">Your Video Title Goes Here</div>
                                <div className="text-xs text-muted-foreground">Your Channel • 10K views • 2 hours ago</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Placeholder Cards */}
                {[1, 2, 3].map((i) => (
                    <div key={i} className="bg-gray-50 rounded-xl overflow-hidden opacity-50">
                        <div className="aspect-video bg-gray-200" />
                        <div className="p-3">
                            <div className="flex gap-3">
                                <div className="w-9 h-9 bg-gray-300 rounded-full flex-shrink-0" />
                                <div className="flex-1">
                                    <div className="h-4 bg-gray-200 rounded w-full mb-2" />
                                    <div className="h-3 bg-gray-100 rounded w-2/3" />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
