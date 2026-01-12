import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ThumbnailPreviewTool } from "@/components/tools/ThumbnailPreviewTool";
import { StoreBadges } from "@/components/ui/store-badges";
import { Card } from "@/components/ui/card";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { RelatedArticles } from "@/components/ui/RelatedArticles";
import { CheckCircle, Sparkles } from "lucide-react";

export const metadata: Metadata = {
    title: "YouTube Thumbnail Size & Preview Tool - Free Online Checker | Thumbly",
    description: "Check your YouTube thumbnail dimensions and preview how it looks on desktop, mobile, and in the feed. Free tool with official size guidelines (1280x720, 16:9 aspect ratio).",
    keywords: [
        "YouTube thumbnail size",
        "thumbnail dimensions",
        "YouTube thumbnail preview",
        "thumbnail checker",
        "16:9 aspect ratio",
        "1280x720 thumbnail",
        "YouTube thumbnail tool",
    ],
    openGraph: {
        title: "YouTube Thumbnail Size & Preview Tool",
        description: "Check your thumbnail dimensions and preview how it looks across devices.",
        type: "website",
        url: "https://thumbnailai.pro/tools/youtube-thumbnail-preview",
    },
    alternates: {
        canonical: "https://thumbnailai.pro/tools/youtube-thumbnail-preview",
    },
};

export default function YouTubeThumbnailPreviewPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-white">
                <div className="py-24 lg:py-32">
                    <div className="max-w-5xl mx-auto px-6 lg:px-8">
                        {/* Breadcrumb */}
                        <Breadcrumb
                            items={[
                                { label: "Tools", href: "/tools/youtube-thumbnail-preview" },
                                { label: "Thumbnail Preview" }
                            ]}
                        />

                        {/* Header */}
                        <div className="text-center max-w-3xl mx-auto mb-12">
                            <span className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
                                Free Tool
                            </span>
                            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
                                YouTube Thumbnail Size & Preview Tool
                            </h1>
                            <p className="text-lg text-muted-foreground">
                                Upload your thumbnail to check dimensions and see exactly how it will appear on YouTube across different devices.
                            </p>
                        </div>

                        {/* Quick Specs Reference */}
                        <Card className="p-6 mb-8 bg-gradient-to-r from-accent/5 to-purple-500/5 border-accent/20">
                            <h2 className="font-bold text-lg mb-4">Official YouTube Thumbnail Specifications</h2>
                            <div className="grid sm:grid-cols-4 gap-4">
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                                    <div>
                                        <div className="font-semibold">1280 × 720px</div>
                                        <div className="text-xs text-muted-foreground">Resolution</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                                    <div>
                                        <div className="font-semibold">16:9</div>
                                        <div className="text-xs text-muted-foreground">Aspect Ratio</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                                    <div>
                                        <div className="font-semibold">2 MB Max</div>
                                        <div className="text-xs text-muted-foreground">File Size</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                                    <div>
                                        <div className="font-semibold">JPG, PNG, GIF</div>
                                        <div className="text-xs text-muted-foreground">Formats</div>
                                    </div>
                                </div>
                            </div>
                        </Card>

                        {/* Tool Component */}
                        <ThumbnailPreviewTool />

                        {/* SEO Content */}
                        <div className="mt-16 prose prose-lg max-w-none">
                            <h2>Understanding YouTube Thumbnail Size Requirements</h2>
                            <p>
                                YouTube displays thumbnails in various sizes across different devices and contexts. Getting your thumbnail dimensions right ensures your content looks professional everywhere it appears — from search results to the home feed to suggested videos.
                            </p>

                            <h3>Why 1280×720 Pixels?</h3>
                            <p>
                                YouTube recommends <strong>1280×720 pixels</strong> as the ideal thumbnail resolution. This size provides enough detail for the largest display contexts while keeping file sizes manageable. The minimum width requirement is 640 pixels, but using the full 1280×720 resolution ensures your thumbnail looks sharp on high-resolution displays.
                            </p>

                            <h3>The 16:9 Aspect Ratio Explained</h3>
                            <p>
                                The 16:9 aspect ratio matches YouTube&apos;s video player dimensions. When you upload a thumbnail with a different aspect ratio, YouTube will either add black bars (letterboxing) or crop your image to fit — both of which can make your thumbnail look unprofessional and reduce click-through rates.
                            </p>

                            <h3>File Format Recommendations</h3>
                            <p>
                                YouTube accepts JPG, PNG, and GIF formats for thumbnails. Here&apos;s when to use each:
                            </p>
                            <ul>
                                <li><strong>JPG:</strong> Best for photographic images and most thumbnails. Offers good compression with acceptable quality.</li>
                                <li><strong>PNG:</strong> Ideal for graphics with text or sharp edges. Produces larger files but maintains crisp details.</li>
                                <li><strong>GIF:</strong> Rarely recommended. Limited to 256 colors and doesn&apos;t animate as a YouTube thumbnail.</li>
                            </ul>

                            <h3>Preview Contexts Explained</h3>
                            <p>
                                This tool shows your thumbnail in three key contexts:
                            </p>
                            <ul>
                                <li><strong>Desktop Video Player:</strong> How your thumbnail appears before a viewer clicks play</li>
                                <li><strong>Mobile Video Player:</strong> The mobile viewing experience with overlay controls</li>
                                <li><strong>YouTube Feed:</strong> How your thumbnail competes for attention against other videos</li>
                            </ul>

                            <h3>Tips for High-CTR Thumbnails</h3>
                            <ul>
                                <li>Use high contrast colors that pop against YouTube&apos;s interface</li>
                                <li>Include a clear, expressive face when relevant</li>
                                <li>Keep text minimal (3-4 words maximum) and large enough to read at small sizes</li>
                                <li>Test your thumbnail at small sizes — if it works at 100 pixels wide, it works everywhere</li>
                            </ul>
                        </div>

                        {/* Related Articles */}
                        <RelatedArticles />

                        {/* CTA Section */}
                        <Card className="mt-16 p-8 bg-gradient-to-br from-accent/5 via-purple-500/5 to-pink-500/5 border-accent/20">
                            <div className="text-center">
                                <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
                                    <Sparkles className="w-4 h-4" />
                                    Create Thumbnails Instantly
                                </div>
                                <h2 className="text-2xl font-bold mb-3">
                                    Skip the Design Work — Let AI Create Your Thumbnails
                                </h2>
                                <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
                                    Thumbly generates professional, correctly-sized thumbnails automatically. Just describe your video — no design skills or size calculations needed.
                                </p>
                                <StoreBadges size="md" />
                            </div>
                        </Card>
                    </div>
                </div>
            </main>
            <Footer />

            {/* Tool Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebApplication",
                        "name": "YouTube Thumbnail Size & Preview Tool",
                        "description": "Check your YouTube thumbnail dimensions and preview how it looks on desktop, mobile, and in the feed.",
                        "url": "https://thumbnailai.pro/tools/youtube-thumbnail-preview",
                        "applicationCategory": "DesignApplication",
                        "operatingSystem": "Any",
                        "offers": {
                            "@type": "Offer",
                            "price": "0",
                            "priceCurrency": "USD"
                        },
                        "author": {
                            "@type": "Organization",
                            "name": "Thumbly"
                        }
                    })
                }}
            />
        </>
    );
}
