"use server";

import { v2 as cloudinary } from "cloudinary";

// Configure Cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

export interface UploadResult {
    url: string;
    publicId: string;
    success: boolean;
    error?: string;
}

/**
 * Upload an image from a URL to Cloudinary
 * This is useful for storing fal.ai generated images permanently
 */
export async function uploadFromUrl(
    imageUrl: string,
    options?: {
        folder?: string;
        publicId?: string;
    }
): Promise<UploadResult> {
    try {
        const result = await cloudinary.uploader.upload(imageUrl, {
            folder: options?.folder || "thumbly/thumbnails",
            public_id: options?.publicId,
            resource_type: "image",
            transformation: [
                { width: 1280, height: 720, crop: "fill" }, // Ensure 16:9
                { quality: "auto:best" },
                { fetch_format: "auto" },
            ],
        });

        return {
            url: result.secure_url,
            publicId: result.public_id,
            success: true,
        };
    } catch (error) {
        console.error("Cloudinary upload error:", error);
        return {
            url: "",
            publicId: "",
            success: false,
            error: error instanceof Error ? error.message : "Upload failed",
        };
    }
}

/**
 * Delete an image from Cloudinary
 */
export async function deleteImage(publicId: string): Promise<boolean> {
    try {
        await cloudinary.uploader.destroy(publicId);
        return true;
    } catch (error) {
        console.error("Cloudinary delete error:", error);
        return false;
    }
}

/**
 * Get an optimized URL for a Cloudinary image
 */
export async function getOptimizedUrl(
    publicId: string,
    options?: {
        width?: number;
        height?: number;
        quality?: string;
    }
): Promise<string> {
    return cloudinary.url(publicId, {
        width: options?.width || 1280,
        height: options?.height || 720,
        crop: "fill",
        quality: options?.quality || "auto",
        fetch_format: "auto",
    });
}
