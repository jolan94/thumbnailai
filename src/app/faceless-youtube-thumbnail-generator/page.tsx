import { Metadata } from "next";
import { SEOLandingPage } from "@/components/seo/SEOLandingPage";
import { seoPages } from "@/lib/seo-page-data";

const pageData = seoPages['faceless-youtube-thumbnail-generator'];

export const metadata: Metadata = {
    title: pageData.title,
    description: pageData.description,
    keywords: pageData.keywords,
    openGraph: {
        title: pageData.title,
        description: pageData.description,
        type: "website",
        url: "https://aithumbnailgenerator.app/faceless-youtube-thumbnail-generator",
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
        canonical: "https://aithumbnailgenerator.app/faceless-youtube-thumbnail-generator",
    },
};

export default function FacelessYouTubeThumbnailGeneratorPage() {
    return <SEOLandingPage data={pageData} />;
}
