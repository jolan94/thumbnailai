import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/lib/seo-page-data";
import { Card } from "@/components/ui/card";
import { ArrowRight, Clock, Tag } from "lucide-react";

export const metadata: Metadata = {
    title: "Blog - AI Thumbnail Generator Tips & Guides",
    description: "Learn how to create better YouTube thumbnails. Tips, guides, and case studies from the AI Thumbnail Generator team.",
    openGraph: {
        title: "Blog - AI Thumbnail Generator Tips & Guides",
        description: "Learn how to create better YouTube thumbnails. Tips, guides, and case studies.",
        type: "website",
        url: "https://aithumbnailgenerator.app/blog",
    },
    alternates: {
        canonical: "https://aithumbnailgenerator.app/blog",
    },
};

export default function BlogPage() {
    return (
        <div className="py-24 lg:py-32">
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-sm font-medium text-accent uppercase tracking-wider">
                        Blog
                    </span>
                    <h1 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight">
                        Thumbnail Tips & Guides
                    </h1>
                    <p className="mt-6 text-lg text-muted-foreground">
                        Learn how to create thumbnails that get more clicks. Real strategies, case studies, and actionable tips.
                    </p>
                </div>

                {/* Featured Post */}
                <Link href={`/blog/${blogPosts[0].slug}`} className="block mb-12">
                    <Card className="overflow-hidden hover:shadow-xl transition-shadow group">
                        <div className="grid md:grid-cols-2 gap-0">
                            <div className="relative aspect-video md:aspect-auto">
                                <Image
                                    src={blogPosts[0].image}
                                    alt={blogPosts[0].title}
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
                                        {blogPosts[0].category}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <Clock className="w-4 h-4" />
                                        {blogPosts[0].readTime}
                                    </span>
                                </div>
                                <h2 className="text-2xl font-bold mb-4 group-hover:text-accent transition-colors">
                                    {blogPosts[0].title}
                                </h2>
                                <p className="text-muted-foreground mb-6">
                                    {blogPosts[0].description}
                                </p>
                                <div className="flex items-center gap-2 text-accent font-medium">
                                    Read article
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </div>
                    </Card>
                </Link>

                {/* Other Posts */}
                <div className="grid md:grid-cols-2 gap-8">
                    {blogPosts.slice(1).map((post) => (
                        <Link key={post.slug} href={`/blog/${post.slug}`}>
                            <Card className="overflow-hidden hover:shadow-lg transition-shadow group h-full">
                                <div className="relative aspect-video">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                                        <span className="flex items-center gap-1">
                                            <Tag className="w-4 h-4" />
                                            {post.category}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Clock className="w-4 h-4" />
                                            {post.readTime}
                                        </span>
                                    </div>
                                    <h2 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">
                                        {post.title}
                                    </h2>
                                    <p className="text-muted-foreground text-sm">
                                        {post.description}
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
