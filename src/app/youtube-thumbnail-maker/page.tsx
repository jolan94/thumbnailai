import { Metadata } from "next";
import { SEOLandingPage } from "@/components/seo/SEOLandingPage";
import { seoPages } from "@/lib/seo-page-data";

const pageData = seoPages['youtube-thumbnail-maker'];

export const metadata: Metadata = {
    title: pageData.title,
    description: pageData.description,
    keywords: pageData.keywords,
    openGraph: {
        title: pageData.title,
        description: pageData.description,
        type: "website",
        url: "https://aithumbnailgenerator.app/youtube-thumbnail-maker",
        images: [
            {
                url: pageData.thumbnailImages[0],
                width: 1280,
                height: 720,
                alt: pageData.h1,
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: pageData.title,
        description: pageData.description,
        images: [pageData.thumbnailImages[0]],
    },
    alternates: {
        canonical: "https://aithumbnailgenerator.app/youtube-thumbnail-maker",
    },
};

export default function YouTubeThumbnailMakerPage() {
    return <SEOLandingPage data={pageData} />;
}
