"use server";

import { fal } from "@fal-ai/client";
import { uploadFromUrl } from "./cloudinary";

// Configure fal client for server-side usage
fal.config({
    credentials: process.env.FAL_KEY,
});

export interface GenerateImageInput {
    prompt: string;
    aspectRatio?: "16:9" | "9:16" | "1:1";
    numImages?: number; // 1-4
    referenceImageUrls?: string[];
    uploadToCloudinary?: boolean;
}

export interface GeneratedImage {
    imageUrl: string;
    cloudinaryUrl?: string;
    cloudinaryPublicId?: string;
}

export interface GenerateImageResult {
    images: GeneratedImage[];
    success: boolean;
    error?: string;
}

/**
 * Upload a local file (as base64) to fal.ai storage
 * Returns a URL that can be used as a reference image
 */
export async function uploadReferenceImage(
    base64Data: string,
    fileName: string
): Promise<{ url: string; success: boolean; error?: string }> {
    try {
        // Convert base64 to blob
        const base64Response = await fetch(base64Data);
        const blob = await base64Response.blob();
        const file = new File([blob], fileName, { type: blob.type });

        // Upload to fal.ai storage
        const url = await fal.storage.upload(file);

        return {
            url,
            success: true,
        };
    } catch (error) {
        console.error("Fal.ai upload error:", error);
        return {
            url: "",
            success: false,
            error: error instanceof Error ? error.message : "Upload failed",
        };
    }
}

/**
 * Generate thumbnail(s) using fal.ai gpt-image-1.5 model
 * Supports reference images and multiple outputs
 * Uploads to Cloudinary for persistent storage
 */
export async function generateThumbnail(
    input: GenerateImageInput
): Promise<GenerateImageResult> {
    try {
        const numImages = Math.min(Math.max(input.numImages || 1, 1), 4);
        const hasReferences = input.referenceImageUrls && input.referenceImageUrls.length > 0;

        // Use edit endpoint if we have reference images, otherwise use base endpoint
        const endpoint = hasReferences
            ? "fal-ai/gpt-image-1.5/edit"
            : "fal-ai/gpt-image-1.5";

        const baseInput = {
            prompt: `YouTube thumbnail: ${input.prompt}. High quality, eye-catching, vibrant colors, professional design.`,
            num_images: numImages,
            output_format: "png" as const,
            quality: "high" as const,
        };

        const apiInput = hasReferences
            ? {
                ...baseInput,
                image_urls: input.referenceImageUrls,
                image_size: "1536x1024" as const, // Close to 16:9
                input_fidelity: "high" as const,
            }
            : {
                ...baseInput,
                aspect_ratio: input.aspectRatio || "16:9",
            };

        const result = await fal.subscribe(endpoint, {
            input: apiInput,
            logs: true,
        });

        // The result contains images array
        const falImages = result.data?.images || [];

        if (falImages.length === 0) {
            return {
                images: [],
                success: false,
                error: "No images generated",
            };
        }

        // Upload all images to Cloudinary for persistent storage
        const shouldUpload = input.uploadToCloudinary !== false;
        const uploadedImages: GeneratedImage[] = [];

        for (const falImage of falImages) {
            const falImageUrl = falImage.url;

            if (shouldUpload) {
                const uploadResult = await uploadFromUrl(falImageUrl, {
                    folder: "thumbly/thumbnails",
                });

                if (uploadResult.success) {
                    uploadedImages.push({
                        imageUrl: uploadResult.url,
                        cloudinaryUrl: uploadResult.url,
                        cloudinaryPublicId: uploadResult.publicId,
                    });
                    continue;
                }

                console.warn("Cloudinary upload failed, using fal.ai URL as fallback");
            }

            // Fallback to fal.ai URL
            uploadedImages.push({
                imageUrl: falImageUrl,
            });
        }

        return {
            images: uploadedImages,
            success: true,
        };
    } catch (error) {
        console.error("Fal.ai generation error:", error);
        return {
            images: [],
            success: false,
            error: error instanceof Error ? error.message : "Generation failed",
        };
    }
}

export interface EditImageInput {
    prompt: string;
    imageUrls: string[];
    numImages?: number;
    uploadToCloudinary?: boolean;
}

/**
 * Edit existing images using fal.ai gpt-image-1.5/edit model
 */
export async function editThumbnail(
    input: EditImageInput
): Promise<GenerateImageResult> {
    try {
        const numImages = Math.min(Math.max(input.numImages || 1, 1), 4);

        const result = await fal.subscribe("fal-ai/gpt-image-1.5/edit", {
            input: {
                prompt: input.prompt,
                image_urls: input.imageUrls,
                num_images: numImages,
                image_size: "1536x1024" as const,
                quality: "high" as const,
                input_fidelity: "high" as const,
                output_format: "png" as const,
            },
            logs: true,
        });

        const falImages = result.data?.images || [];

        if (falImages.length === 0) {
            return {
                images: [],
                success: false,
                error: "No images generated",
            };
        }

        const shouldUpload = input.uploadToCloudinary !== false;
        const uploadedImages: GeneratedImage[] = [];

        for (const falImage of falImages) {
            if (shouldUpload) {
                const uploadResult = await uploadFromUrl(falImage.url, {
                    folder: "thumbly/thumbnails",
                });

                if (uploadResult.success) {
                    uploadedImages.push({
                        imageUrl: uploadResult.url,
                        cloudinaryUrl: uploadResult.url,
                        cloudinaryPublicId: uploadResult.publicId,
                    });
                    continue;
                }
            }

            uploadedImages.push({
                imageUrl: falImage.url,
            });
        }

        return {
            images: uploadedImages,
            success: true,
        };
    } catch (error) {
        console.error("Fal.ai edit error:", error);
        return {
            images: [],
            success: false,
            error: error instanceof Error ? error.message : "Edit failed",
        };
    }
}
