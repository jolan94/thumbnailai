import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { StoreBadges } from "@/components/ui/store-badges";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Clock, Calendar, User } from "lucide-react";

export const metadata: Metadata = {
    title: "How I Increased YouTube CTR Using Better Thumbnails | AI Thumbnail Generator",
    description: "A founder story about the journey from low CTR to viral thumbnails. Real data, real strategies, and how AI changed everything.",
    openGraph: {
        title: "How I Increased YouTube CTR Using Better Thumbnails",
        description: "A founder story about the journey from low CTR to viral thumbnails.",
        type: "article",
        url: "https://thumbnailai.pro/blog/how-i-increased-youtube-ctr",
        images: [{ url: "/thumbnails/thumnail_22.jpeg", width: 1280, height: 720 }],
    },
    alternates: {
        canonical: "https://thumbnailai.pro/blog/how-i-increased-youtube-ctr",
    },
};

export default function HowIIncreasedYouTubeCTRPage() {
    return (
        <article className="py-24 lg:py-32">
            <div className="max-w-3xl mx-auto px-6 lg:px-8">
                {/* Back Link */}
                <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Blog
                </Link>

                {/* Header */}
                <header className="mb-12">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                        <span className="px-3 py-1 bg-accent/10 text-accent rounded-full font-medium">
                            Case Study
                        </span>
                        <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            January 6, 2025
                        </span>
                        <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            8 min read
                        </span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
                        How I Increased YouTube CTR Using Better Thumbnails
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        From struggling to get views to understanding what makes people click — my journey building an AI thumbnail generator.
                    </p>
                </header>

                {/* Featured Image */}
                <div className="relative aspect-video rounded-2xl overflow-hidden mb-12">
                    <Image
                        src="/thumbnails/thumnail_22.jpeg"
                        alt="How I Increased YouTube CTR"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                {/* Content */}
                <div className="prose prose-lg max-w-none">
                    <h2>The Wake-Up Call</h2>
                    <p>
                        I still remember staring at my YouTube Analytics dashboard, watching my CTR hover around <strong>2.1%</strong>. I had spent weeks crafting what I thought was a brilliant video, only to realize that nobody was even clicking on it.
                    </p>
                    <p>
                        The algorithm wasn&apos;t promoting my content. Not because the video was bad — I had good watch time and engagement from the few viewers who did click — but because my thumbnails were, frankly, terrible.
                    </p>

                    <h2>The Thumbnail Problem</h2>
                    <p>
                        Like many creators, I fell into the trap of treating thumbnails as an afterthought. I&apos;d spend 20 hours on a video and 20 minutes on the thumbnail. The math doesn&apos;t work.
                    </p>
                    <p>
                        YouTube&apos;s own data shows that <strong>90% of top-performing videos have custom thumbnails</strong>. But more importantly, thumbnails directly impact your CTR, which is one of the primary signals the algorithm uses to decide whether to promote your content.
                    </p>

                    <Card className="p-6 my-8 bg-secondary/50">
                        <h3 className="text-lg font-semibold mb-2">The CTR-Views Connection</h3>
                        <p className="text-muted-foreground m-0">
                            A video with 10% CTR will get significantly more impressions than one with 2% CTR. The algorithm sees high CTR as a signal that your content is valuable to viewers, so it shows it to more people.
                        </p>
                    </Card>

                    <h2>What I Changed</h2>
                    <p>
                        I became obsessed with thumbnails. I studied what successful creators were doing. I noticed patterns:
                    </p>
                    <ul>
                        <li><strong>Bold, expressive faces</strong> — emotion sells</li>
                        <li><strong>High contrast</strong> — thumbnails need to pop in search results</li>
                        <li><strong>Minimal text</strong> — 3-4 words maximum, large and readable</li>
                        <li><strong>Curiosity gaps</strong> — hint at value without revealing everything</li>
                        <li><strong>Consistency</strong> — building a recognizable brand across videos</li>
                    </ul>

                    <h2>The Before and After</h2>
                    <p>
                        Here&apos;s what my thumbnails looked like before I made changes:
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-4 my-8">
                    <div className="relative aspect-video rounded-xl overflow-hidden border-2 border-destructive/30">
                        <Image
                            src="/images/before.jpeg"
                            alt="Before - Low CTR thumbnail"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute top-2 left-2 px-2 py-1 bg-destructive text-white text-xs font-semibold rounded">
                            BEFORE: 2.1% CTR
                        </div>
                    </div>
                    <div className="relative aspect-video rounded-xl overflow-hidden border-2 border-green-500/30">
                        <Image
                            src="/images/after.jpeg"
                            alt="After - High CTR thumbnail"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute top-2 left-2 px-2 py-1 bg-green-500 text-white text-xs font-semibold rounded">
                            AFTER: 8.7% CTR
                        </div>
                    </div>
                </div>

                <div className="prose prose-lg max-w-none">
                    <p>
                        The difference was dramatic. Within a month of updating my thumbnail strategy, my average CTR jumped to <strong>8.7%</strong>. More importantly, my monthly views increased by <strong>340%</strong>.
                    </p>

                    <h2>Why I Built an AI Thumbnail Generator</h2>
                    <p>
                        After experiencing this transformation, I realized something: the principles of great thumbnails are learnable, but the execution is time-consuming. I was spending 2-3 hours per thumbnail, hiring freelance designers, and still not always getting the results I wanted.
                    </p>
                    <p>
                        That&apos;s when I started working on what would become the AI Thumbnail Generator. The idea was simple: take everything I learned about high-CTR thumbnails and encode it into an AI that could generate professional designs in seconds.
                    </p>

                    <h2>The Results</h2>
                    <p>
                        Today, I create thumbnails in under a minute. Not only are they faster, but they&apos;re often better than what I could make manually. The AI understands composition, color theory, and visual hierarchy — it&apos;s been trained on millions of successful thumbnails.
                    </p>
                    <p>
                        But more importantly, I can now focus on what I love: creating content. The thumbnail is no longer a bottleneck or source of stress. It&apos;s just another step in the workflow, handled instantly.
                    </p>

                    <h2>What This Means for You</h2>
                    <p>
                        If you&apos;re struggling with low CTR, I have good news: it&apos;s fixable. And you don&apos;t need to spend years learning design or thousands of dollars on freelancers.
                    </p>
                    <p>
                        Start by analyzing your current thumbnails honestly. Are they:
                    </p>
                    <ul>
                        <li>Visible and readable at small sizes?</li>
                        <li>Emotionally compelling?</li>
                        <li>Different enough from competitors to stand out?</li>
                        <li>Consistent with your brand?</li>
                    </ul>
                    <p>
                        If not, it&apos;s time for a change. Your content deserves to be seen.
                    </p>
                </div>

                {/* CTA */}
                <Card className="p-8 my-12 bg-secondary/50 text-center">
                    <h3 className="text-2xl font-bold mb-4">Ready to Improve Your Thumbnails?</h3>
                    <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
                        Try the AI Thumbnail Generator free and see how easy it can be to create click-worthy thumbnails.
                    </p>
                    <StoreBadges size="md" />
                </Card>

                {/* Author */}
                <div className="flex items-center gap-4 pt-8 border-t">
                    <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                        <User className="w-6 h-6 text-muted-foreground" />
                    </div>
                    <div>
                        <div className="font-semibold">Thumbly Team</div>
                        <div className="text-sm text-muted-foreground">
                            Building tools to help creators succeed
                        </div>
                    </div>
                </div>
            </div>

            {/* Article Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": "How I Increased YouTube CTR Using Better Thumbnails",
                        "description": "A founder story about the journey from low CTR to viral thumbnails.",
                        "image": "https://thumbnailai.pro/thumbnails/thumnail_22.jpeg",
                        "datePublished": "2025-01-06",
                        "author": {
                            "@type": "Organization",
                            "name": "AI Thumbnail Generator"
                        }
                    })
                }}
            />
        </article>
    );
}
