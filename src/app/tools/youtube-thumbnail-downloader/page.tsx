import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ThumbnailDownloader } from "@/components/tools/ThumbnailDownloader";
import { StoreBadges } from "@/components/ui/store-badges";
import { Card } from "@/components/ui/card";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { RelatedArticles } from "@/components/ui/RelatedArticles";
import { CheckCircle, Sparkles, Shield, Zap, Download, Image as ImageIcon } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
    title: "YouTube Thumbnail Downloader - Download HD Thumbnails Free | Thumbly",
    description: "Download YouTube video thumbnails in HD quality (1280x720). Free online tool to save thumbnails from any YouTube video, Shorts, or live stream. No login required.",
    keywords: [
        "YouTube thumbnail downloader",
        "download YouTube thumbnail",
        "YouTube thumbnail grabber",
        "save YouTube thumbnail",
        "YouTube thumbnail HD",
        "get YouTube thumbnail",
        "YouTube thumbnail saver",
        "YouTube video thumbnail",
        "thumbnail download",
        "YouTube image downloader",
    ],
    openGraph: {
        title: "YouTube Thumbnail Downloader - Free HD Download",
        description: "Download any YouTube video thumbnail in HD quality. Free, fast, no signup required.",
        type: "website",
        url: "https://aithumbnailgenerator.app/tools/youtube-thumbnail-downloader",
    },
    alternates: {
        canonical: "https://aithumbnailgenerator.app/tools/youtube-thumbnail-downloader",
    },
};

export default function YouTubeThumbnailDownloaderPage() {
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
                                { label: "Thumbnail Downloader" }
                            ]}
                        />

                        {/* Header */}
                        <div className="text-center max-w-3xl mx-auto mb-12">
                            <span className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/10 text-green-600 rounded-full text-sm font-medium mb-4">
                                <Download className="w-4 h-4" />
                                Free Tool
                            </span>
                            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
                                YouTube Thumbnail Downloader
                            </h1>
                            <p className="text-lg text-muted-foreground">
                                Download high-quality thumbnails from any YouTube video. Get HD images in seconds — no signup required.
                            </p>
                        </div>

                        {/* Features Strip */}
                        <div className="grid sm:grid-cols-3 gap-4 mb-8">
                            <div className="flex items-center justify-center gap-2 p-3 bg-gray-50 rounded-xl">
                                <Zap className="w-5 h-5 text-yellow-600" />
                                <span className="text-sm font-medium">Instant Download</span>
                            </div>
                            <div className="flex items-center justify-center gap-2 p-3 bg-gray-50 rounded-xl">
                                <ImageIcon className="w-5 h-5 text-blue-600" />
                                <span className="text-sm font-medium">Multiple Resolutions</span>
                            </div>
                            <div className="flex items-center justify-center gap-2 p-3 bg-gray-50 rounded-xl">
                                <Shield className="w-5 h-5 text-green-600" />
                                <span className="text-sm font-medium">No Signup Required</span>
                            </div>
                        </div>

                        {/* Tool Component */}
                        <ThumbnailDownloader />

                        {/* Quality Info */}
                        <Card className="p-6 mt-8 bg-gradient-to-r from-blue-500/5 to-purple-500/5 border-blue-500/20">
                            <h2 className="font-bold text-lg mb-4">Available Thumbnail Qualities</h2>
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <div className="font-semibold">Maximum Resolution</div>
                                        <div className="text-sm text-muted-foreground">1280×720 pixels (HD)</div>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <div className="font-semibold">Standard Definition</div>
                                        <div className="text-sm text-muted-foreground">640×480 pixels</div>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <div className="font-semibold">High Quality</div>
                                        <div className="text-sm text-muted-foreground">480×360 pixels</div>
                                    </div>
                                </div>
                            </div>
                        </Card>

                        {/* SEO Content */}
                        <div className="mt-16 prose prose-lg max-w-none">
                            <h2>How to Download YouTube Thumbnails</h2>
                            <p>
                                Downloading a YouTube video thumbnail is simple with our free tool. Just paste the video URL into the input field above, click &quot;Get Thumbnails,&quot; and you&apos;ll instantly see all available thumbnail sizes for that video.
                            </p>

                            <h3>Step-by-Step Guide</h3>
                            <ol>
                                <li><strong>Copy the YouTube video URL</strong> — This can be from youtube.com, youtu.be, or a Shorts link</li>
                                <li><strong>Paste it into the tool above</strong> — We support all YouTube URL formats</li>
                                <li><strong>Click &quot;Get Thumbnails&quot;</strong> — The tool extracts all available thumbnail sizes</li>
                                <li><strong>Download your preferred quality</strong> — Choose from HD (1280×720) down to small thumbnails</li>
                            </ol>

                            <h2>Why Download YouTube Thumbnails?</h2>
                            <p>
                                There are many legitimate reasons to download YouTube thumbnails:
                            </p>
                            <ul>
                                <li><strong>Research and inspiration:</strong> Analyze what makes successful thumbnails in your niche</li>
                                <li><strong>Educational purposes:</strong> Study thumbnail design techniques and trends</li>
                                <li><strong>Reference for your own designs:</strong> Understand competitor strategies</li>
                                <li><strong>Archive your own content:</strong> Save thumbnails from your own videos</li>
                            </ul>

                            <h2>Supported YouTube URL Formats</h2>
                            <p>
                                Our thumbnail downloader works with all standard YouTube URL formats:
                            </p>
                            <ul>
                                <li><strong>Standard URLs:</strong> youtube.com/watch?v=VIDEO_ID</li>
                                <li><strong>Short URLs:</strong> youtu.be/VIDEO_ID</li>
                                <li><strong>Shorts URLs:</strong> youtube.com/shorts/VIDEO_ID</li>
                                <li><strong>Embed URLs:</strong> youtube.com/embed/VIDEO_ID</li>
                                <li><strong>Direct Video ID:</strong> Just paste the 11-character video ID</li>
                            </ul>

                            <h2>Thumbnail Resolution Explained</h2>
                            <p>
                                YouTube generates multiple thumbnail sizes for each video. The maximum resolution (1280×720 or &quot;maxresdefault&quot;) is the full HD version used on larger screens. Not all videos have HD thumbnails available — in those cases, the standard or high-quality versions will be the best option.
                            </p>

                            <h3>Which Resolution Should You Download?</h3>
                            <ul>
                                <li><strong>Maximum Resolution (1280×720):</strong> Best for detailed analysis or high-quality reference</li>
                                <li><strong>Standard Definition (640×480):</strong> Good balance of quality and file size</li>
                                <li><strong>High/Medium Quality:</strong> Suitable for quick reference or smaller displays</li>
                            </ul>

                            <h2>Frequently Asked Questions</h2>

                            <h3>Is it legal to download YouTube thumbnails?</h3>
                            <p>
                                Downloading thumbnails for personal use, research, or educational purposes is generally acceptable. However, using someone else&apos;s thumbnail as your own would violate their copyright. Always create original thumbnails for your own content.
                            </p>

                            <h3>Why can&apos;t I see the HD thumbnail?</h3>
                            <p>
                                Not all YouTube videos have maximum resolution thumbnails available. This depends on how the video was uploaded and whether a custom thumbnail was added. In these cases, use the highest available resolution.
                            </p>

                            <h3>Can I download thumbnails from private videos?</h3>
                            <p>
                                No, our tool only works with public YouTube videos. Thumbnails from private or unlisted videos are not accessible.
                            </p>
                        </div>

                        {/* Related Tools */}
                        <Card className="mt-12 p-6">
                            <h2 className="font-bold text-lg mb-4">More Tools</h2>
                            <div className="grid sm:grid-cols-2 gap-4">
                                <Link href="/tools/youtube-thumbnail-preview" className="block">
                                    <div className="p-4 border rounded-xl hover:border-accent hover:shadow-md transition-all group">
                                        <h3 className="font-semibold group-hover:text-accent transition-colors">Thumbnail Size & Preview Tool</h3>
                                        <p className="text-sm text-muted-foreground mt-1">Check dimensions and preview across devices</p>
                                    </div>
                                </Link>
                                <Link href="/ai-youtube-thumbnail-generator" className="block">
                                    <div className="p-4 border rounded-xl hover:border-accent hover:shadow-md transition-all group">
                                        <h3 className="font-semibold group-hover:text-accent transition-colors">AI Thumbnail Generator</h3>
                                        <p className="text-sm text-muted-foreground mt-1">Create professional thumbnails with AI</p>
                                    </div>
                                </Link>
                            </div>
                        </Card>

                        {/* Related Articles */}
                        <RelatedArticles />

                        {/* CTA Section */}
                        <Card className="mt-12 p-8 bg-gradient-to-br from-accent/5 via-purple-500/5 to-pink-500/5 border-accent/20">
                            <div className="text-center">
                                <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
                                    <Sparkles className="w-4 h-4" />
                                    Create Better Thumbnails
                                </div>
                                <h2 className="text-2xl font-bold mb-3">
                                    Why Download When You Can Create?
                                </h2>
                                <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
                                    Skip the inspiration phase — Thumbly generates professional, custom thumbnails in seconds. Describe your video and let AI do the design work.
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
                        "name": "YouTube Thumbnail Downloader",
                        "description": "Download YouTube video thumbnails in HD quality. Free online tool to save thumbnails from any YouTube video.",
                        "url": "https://aithumbnailgenerator.app/tools/youtube-thumbnail-downloader",
                        "applicationCategory": "UtilityApplication",
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

            {/* FAQ Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "Is it legal to download YouTube thumbnails?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Downloading thumbnails for personal use, research, or educational purposes is generally acceptable. However, using someone else's thumbnail as your own would violate their copyright."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Why can't I see the HD thumbnail?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Not all YouTube videos have maximum resolution thumbnails available. This depends on how the video was uploaded and whether a custom thumbnail was added."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Can I download thumbnails from private videos?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "No, this tool only works with public YouTube videos. Thumbnails from private or unlisted videos are not accessible."
                                }
                            }
                        ]
                    })
                }}
            />
        </>
    );
}
