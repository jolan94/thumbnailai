import Link from "next/link";
import { Card } from "@/components/ui/card";
import { BookOpen, ArrowRight } from "lucide-react";

interface RelatedArticlesProps {
    articles?: {
        href: string;
        label: string;
        description: string;
    }[];
}

const defaultArticles = [
    {
        href: "/articles/youtube-thumbnail-size-guide",
        label: "YouTube Thumbnail Size & Best Practices (2026 Guide)",
        description: "Complete guide to thumbnail dimensions and optimization"
    },
    {
        href: "/articles/best-colors-for-youtube-thumbnails",
        label: "Best Colors for YouTube Thumbnails",
        description: "Color psychology and high-CTR color combinations"
    }
];

export function RelatedArticles({ articles = defaultArticles }: RelatedArticlesProps) {
    return (
        <div className="my-12">
            <div className="flex items-center gap-2 mb-4">
                <BookOpen className="w-5 h-5 text-accent" />
                <h3 className="font-bold text-lg">Related Articles</h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
                {articles.map((article) => (
                    <Link key={article.href} href={article.href}>
                        <Card className="p-4 hover:shadow-md transition-shadow group h-full">
                            <div className="flex flex-col h-full">
                                <h4 className="font-semibold group-hover:text-accent transition-colors line-clamp-2">
                                    {article.label}
                                </h4>
                                <p className="text-sm text-muted-foreground mt-2 flex-1">
                                    {article.description}
                                </p>
                                <div className="flex items-center gap-1 text-sm text-accent mt-3">
                                    Read more
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </Card>
                    </Link>
                ))}
            </div>
        </div>
    );
}
