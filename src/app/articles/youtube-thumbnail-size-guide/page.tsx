import { Metadata } from "next";
import Image from "next/image";
import { ArticleCTA } from "@/components/ui/ArticleCTA";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { RelatedTools } from "@/components/ui/RelatedTools";
import { Clock, Calendar, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
    title: "YouTube Thumbnail Size & Best Practices (2026 Guide) | Thumbly",
    description: "Complete guide to YouTube thumbnail dimensions, resolution, file formats, and optimization techniques. Learn the exact specs YouTube recommends for maximum visibility.",
    openGraph: {
        title: "YouTube Thumbnail Size & Best Practices (2026 Guide)",
        description: "Complete guide to YouTube thumbnail dimensions, resolution, and best practices.",
        type: "article",
        url: "https://aithumbnailgenerator.app/articles/youtube-thumbnail-size-guide",
        images: [{ url: "/thumbnails/thumnail_25.jpeg", width: 1280, height: 720 }],
    },
    alternates: {
        canonical: "https://aithumbnailgenerator.app/articles/youtube-thumbnail-size-guide",
    },
};

export default function YouTubeThumbnailSizeGuidePage() {
    return (
        <article className="py-24 lg:py-32">
            <div className="max-w-4xl mx-auto px-6 lg:px-8">
                {/* Breadcrumb */}
                <Breadcrumb
                    items={[
                        { label: "Articles", href: "/articles" },
                        { label: "Thumbnail Size Guide" }
                    ]}
                />

                {/* Header */}
                <header className="mb-12">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                        <span className="px-3 py-1 bg-green-500/10 text-green-600 rounded-full font-medium">
                            Guide
                        </span>
                        <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            January 11, 2026
                        </span>
                        <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            8 min read
                        </span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
                        YouTube Thumbnail Size & Best Practices (2026 Guide)
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        The complete technical guide to YouTube thumbnail specifications. Get the dimensions, resolution, and file formats right every time.
                    </p>
                </header>

                {/* Featured Image */}
                <div className="relative aspect-video rounded-2xl overflow-hidden mb-12">
                    <Image
                        src="/thumbnails/thumnail_25.jpeg"
                        alt="YouTube Thumbnail Size Guide"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                {/* Content */}
                <div className="prose prose-lg max-w-none">
                    <p>
                        Getting your YouTube thumbnail size right isn&apos;t just about following rules — it&apos;s about making sure your content looks professional across every device. A thumbnail that&apos;s too small looks blurry; one that&apos;s too large wastes upload time and can get compressed awkwardly.
                    </p>
                    <p>
                        This guide covers everything you need to know about YouTube thumbnail specifications in 2026, plus practical tips to make your thumbnails stand out.
                    </p>

                    <h2>The Official YouTube Thumbnail Specifications</h2>
                    <p>
                        YouTube has specific requirements for thumbnails. Here&apos;s what you need to know:
                    </p>

                    <div className="bg-gray-50 rounded-xl p-6 my-8 not-prose">
                        <h3 className="text-lg font-bold mb-4">Quick Reference</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                <span><strong>Resolution:</strong> 1280 × 720 pixels (minimum width of 640 pixels)</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                <span><strong>Aspect ratio:</strong> 16:9</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                <span><strong>File formats:</strong> JPG, GIF, or PNG</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                <span><strong>Maximum file size:</strong> 2 MB</span>
                            </li>
                        </ul>
                    </div>

                    <h2>Why 1280×720 Pixels?</h2>
                    <p>
                        YouTube displays thumbnails in various sizes across different devices and contexts. The 1280×720 resolution ensures your thumbnail looks sharp whether it&apos;s displayed as a large preview on desktop or a small tile on mobile search results.
                    </p>
                    <p>
                        While you can technically upload larger images, YouTube will compress them. The 1280×720 sweet spot gives you the best quality-to-file-size ratio.
                    </p>

                    <h2>Understanding the 16:9 Aspect Ratio</h2>
                    <p>
                        The 16:9 aspect ratio matches YouTube&apos;s video player dimensions. If you upload a thumbnail with a different aspect ratio (like 4:3 or 1:1), YouTube will add black bars or crop your image automatically — neither of which looks professional.
                    </p>
                    <p>
                        Always design your thumbnails at exactly 16:9 to maintain full control over how your content appears.
                    </p>

                    <h3>Common Aspect Ratio Mistakes</h3>
                    <ul>
                        <li><strong>Square images (1:1):</strong> Often happen when using Instagram-sized templates. YouTube will add side bars.</li>
                        <li><strong>Portrait images (9:16):</strong> Sometimes confused with Shorts thumbnails. These get heavily cropped.</li>
                        <li><strong>4:3 format:</strong> Legacy aspect ratio that results in letterboxing.</li>
                    </ul>

                    <h2>File Format Recommendations</h2>

                    <h3>JPEG (.jpg) — Best for Most Thumbnails</h3>
                    <p>
                        JPEG offers the best balance of quality and file size for photographic images. Most thumbnail creators use JPEG because it handles gradients, faces, and complex images well while staying under the 2MB limit.
                    </p>

                    <h3>PNG — Best for Graphics with Text</h3>
                    <p>
                        PNG preserves sharp edges better than JPEG, making it ideal for thumbnails with bold text overlays or graphic elements. The tradeoff is larger file sizes — you may need to compress PNG files to stay under 2MB.
                    </p>

                    <h3>GIF — Rarely Recommended</h3>
                    <p>
                        Despite being supported, GIF is limited to 256 colors and produces lower-quality thumbnails. Unless you have a specific artistic reason, avoid GIF format.
                    </p>

                    <h2>Best Practices for High-CTR Thumbnails</h2>
                    <p>
                        Getting the technical specs right is just the foundation. Here&apos;s what separates thumbnails that get clicked from those that get scrolled past:
                    </p>

                    <h3>1. Use High-Contrast Colors</h3>
                    <p>
                        YouTube&apos;s interface is predominantly white and red. Thumbnails with blue, yellow, or green backgrounds tend to stand out more than red ones that blend with the UI.
                    </p>

                    <h3>2. Include Expressive Faces</h3>
                    <p>
                        Thumbnails featuring human faces with clear emotions consistently outperform faceless designs. The key is genuine, exaggerated expressions — surprised, excited, shocked, or curious.
                    </p>

                    <h3>3. Keep Text Minimal and Large</h3>
                    <p>
                        If you use text, limit it to 3-4 words maximum. Text should be readable at small sizes — remember that many viewers see thumbnails on mobile devices where details are compressed.
                    </p>

                    <h3>4. Create Visual Hierarchy</h3>
                    <p>
                        Your thumbnail should communicate its main message within one second. Use size, color, and positioning to guide the viewer&apos;s eye to the most important element first.
                    </p>

                    <h2>Testing Your Thumbnails</h2>
                    <p>
                        Before uploading, preview your thumbnail at different sizes. YouTube shows thumbnails at various dimensions:
                    </p>
                    <ul>
                        <li><strong>Search results (mobile):</strong> Approximately 168×94 pixels</li>
                        <li><strong>Home feed (desktop):</strong> Approximately 360×202 pixels</li>
                        <li><strong>Watch page suggestions:</strong> Approximately 168×94 pixels</li>
                        <li><strong>Full preview:</strong> Up to 1280×720 pixels</li>
                    </ul>
                    <p>
                        If your thumbnail looks good at 168 pixels wide, it will look good everywhere.
                    </p>

                    <h2>Common Technical Issues and Solutions</h2>

                    <h3>Blurry Thumbnails</h3>
                    <p>
                        Usually caused by uploading images smaller than 1280×720 or over-compressing JPEG files. Always export at maximum or high quality settings.
                    </p>

                    <h3>Color Shifts</h3>
                    <p>
                        YouTube uses sRGB color space. If your colors look different after upload, ensure your design software is set to sRGB before exporting.
                    </p>

                    <h3>File Too Large</h3>
                    <p>
                        If your file exceeds 2MB, try switching from PNG to JPEG, or use image compression tools. Aim for 500KB-1MB for the best balance of quality and upload speed.
                    </p>
                </div>

                {/* Related Tools */}
                <RelatedTools />

                {/* CTA */}
                <ArticleCTA
                    title="Create Perfect Thumbnails Automatically"
                    description="Thumbly generates thumbnails at the exact specifications YouTube requires. No manual resizing or format conversions needed."
                />
            </div>

            {/* Article Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": "YouTube Thumbnail Size & Best Practices (2026 Guide)",
                        "description": "Complete guide to YouTube thumbnail dimensions, resolution, file formats, and optimization techniques.",
                        "image": "https://aithumbnailgenerator.app/thumbnails/thumnail_25.jpeg",
                        "datePublished": "2026-01-11",
                        "dateModified": "2026-01-11",
                        "author": {
                            "@type": "Organization",
                            "name": "Thumbly"
                        },
                        "publisher": {
                            "@type": "Organization",
                            "name": "Thumbly",
                            "logo": {
                                "@type": "ImageObject",
                                "url": "https://aithumbnailgenerator.app/icon.png"
                            }
                        }
                    })
                }}
            />
        </article>
    );
}
