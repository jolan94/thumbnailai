import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Wrench, ArrowRight } from "lucide-react";

interface RelatedToolsProps {
    tools?: {
        href: string;
        label: string;
        description: string;
    }[];
}

const defaultTools = [
    {
        href: "/tools/youtube-thumbnail-preview",
        label: "Thumbnail Size & Preview Tool",
        description: "Check dimensions and preview your thumbnail across devices"
    },
    {
        href: "/tools/youtube-thumbnail-downloader",
        label: "Thumbnail Downloader",
        description: "Download HD thumbnails from any YouTube video"
    }
];

export function RelatedTools({ tools = defaultTools }: RelatedToolsProps) {
    return (
        <div className="my-12 not-prose">
            <div className="flex items-center gap-2 mb-4">
                <Wrench className="w-5 h-5 text-accent" />
                <h3 className="font-bold text-lg">Related Tools</h3>
            </div>
            <div className="grid gap-4">
                {tools.map((tool) => (
                    <Link key={tool.href} href={tool.href}>
                        <Card className="p-4 hover:shadow-md transition-shadow group">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h4 className="font-semibold group-hover:text-accent transition-colors">
                                        {tool.label}
                                    </h4>
                                    <p className="text-sm text-muted-foreground mt-1">
                                        {tool.description}
                                    </p>
                                </div>
                                <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all flex-shrink-0" />
                            </div>
                        </Card>
                    </Link>
                ))}
            </div>
        </div>
    );
}
