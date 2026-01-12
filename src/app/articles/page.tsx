import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { ArrowRight, Clock, Tag, BookOpen } from "lucide-react";

export const metadata: Metadata = {
    title: "Learn - YouTube Thumbnail Guides & Tips | Thumbly",
    description: "Master YouTube thumbnail design with our comprehensive guides. Learn about sizes, colors, best practices, and AI tools to create thumbnails that get clicks.",
    openGraph: {
        title: "Learn - YouTube Thumbnail Guides & Tips",
        description: "Master YouTube thumbnail design with our comprehensive guides.",
        type: "website",
        url: "https://thumbnailai.pro/articles",
    },
    alternates: {
        canonical: "https://thumbnailai.pro/articles",
    },
};

const articles = [
    {
        slug: "youtube-thumbnail-size-guide",
        title: "YouTube Thumbnail Size & Best Practices (2026 Guide)",
        description: "Everything you need to know about YouTube thumbnail dimensions, resolution, file formats, and optimization for maximum clicks.",
        date: "January 11, 2026",
        readTime: "8 min read",
        category: "Guide",
        image: "/thumbnails/thumnail_25.jpeg",
        featured: true,
    },
    {
        slug: "youtube-thumbnails-on-iphone",
        title: "How to Make YouTube Thumbnails on iPhone",
        description: "Step-by-step guide to creating professional YouTube thumbnails directly on your iPhone with the right apps and workflow.",
        date: "January 11, 2026",
        readTime: "7 min read",
        category: "Tutorial",
        image: "/thumbnails/thumnail_26.jpeg",
    },
    {
        slug: "best-colors-for-youtube-thumbnails",
        title: "Best Colors for YouTube Thumbnails That Get Clicks",
        description: "Learn the psychology of color in thumbnails and which color combinations drive the highest click-through rates.",
        date: "January 11, 2026",
        readTime: "9 min read",
        category: "Strategy",
        image: "/thumbnails/thumnail_27.jpeg",
    },
    {
        slug: "ai-vs-manual-thumbnail-design",
        title: "AI vs Manual Thumbnail Design: What Works Better?",
        description: "An honest comparison of AI-powered thumbnail creation versus traditional design methods. Pros, cons, and when to use each.",
        date: "January 11, 2026",
        readTime: "10 min read",
        category: "Comparison",
        image: "/thumbnails/thumnail_28.jpeg",
    },
    {
        slug: "thumbnail-ideas-youtube-shorts",
        title: "Thumbnail Ideas for YouTube Shorts",
        description: "Creative thumbnail strategies specifically for YouTube Shorts that help your vertical content stand out and get more views.",
        date: "January 11, 2026",
        readTime: "6 min read",
        category: "Ideas",
        image: "/thumbnails/thumnail_29.jpeg",
    },
];

export default function ArticlesPage() {
    const featuredArticle = articles.find(a => a.featured);
    const otherArticles = articles.filter(a => !a.featured);

    return (
        <div className="py-24 lg:py-32">
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-accent uppercase tracking-wider">
                        <BookOpen className="w-4 h-4" />
                        Learn
                    </span>
                    <h1 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight">
                        YouTube Thumbnail Guides
                    </h1>
                    <p className="mt-6 text-lg text-muted-foreground">
                        Practical guides to help you create thumbnails that get more clicks. No fluff, just actionable strategies.
                    </p>
                </div>

                {/* Featured Article */}
                {featuredArticle && (
                    <Link href={`/articles/${featuredArticle.slug}`} className="block mb-12">
                        <Card className="overflow-hidden hover:shadow-xl transition-shadow group">
                            <div className="grid md:grid-cols-2 gap-0">
                                <div className="relative aspect-video md:aspect-auto min-h-[300px]">
                                    <Image
                                        src={featuredArticle.image}
                                        alt={featuredArticle.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                    <div className="absolute top-4 left-4 px-3 py-1 bg-accent text-white text-xs font-semibold rounded-full">
                                        Featured
                                    </div>
                                </div>
                                <div className="p-8 flex flex-col justify-center">
                                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                                        <span className="flex items-center gap-1">
                                            <Tag className="w-4 h-4" />
                                            {featuredArticle.category}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Clock className="w-4 h-4" />
                                            {featuredArticle.readTime}
                                        </span>
                                    </div>
                                    <h2 className="text-2xl font-bold mb-4 group-hover:text-accent transition-colors">
                                        {featuredArticle.title}
                                    </h2>
                                    <p className="text-muted-foreground mb-6">
                                        {featuredArticle.description}
                                    </p>
                                    <div className="flex items-center gap-2 text-accent font-medium">
                                        Read guide
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </Link>
                )}

                {/* Other Articles */}
                <div className="grid md:grid-cols-2 gap-8">
                    {otherArticles.map((article) => (
                        <Link key={article.slug} href={`/articles/${article.slug}`}>
                            <Card className="overflow-hidden hover:shadow-lg transition-shadow group h-full">
                                <div className="relative aspect-video">
                                    <Image
                                        src={article.image}
                                        alt={article.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                                        <span className="flex items-center gap-1">
                                            <Tag className="w-4 h-4" />
                                            {article.category}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Clock className="w-4 h-4" />
                                            {article.readTime}
                                        </span>
                                    </div>
                                    <h2 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">
                                        {article.title}
                                    </h2>
                                    <p className="text-muted-foreground text-sm">
                                        {article.description}
                                    </p>
                                </div>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
