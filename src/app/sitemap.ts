import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://aithumbnailgenerator.app'

    // Static pages
    const staticPages = [
        '',
        '/ai-youtube-thumbnail-generator',
        '/youtube-thumbnail-maker',
        '/gaming-thumbnail-maker',
        '/vlog-thumbnail-generator',
        '/no-design-thumbnail-maker',
        '/podcast-thumbnail-maker',
        '/faceless-youtube-thumbnail-generator',
    ]

    // Blog posts
    const blogPosts = [
        '/blog',
        '/blog/how-i-increased-youtube-ctr',
        '/blog/best-ai-thumbnail-generators-2025',
        '/blog/gaming-thumbnails-that-get-clicks',
    ]

    const allPages = [...staticPages, ...blogPosts]

    return allPages.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: route.startsWith('/blog') ? 'weekly' : 'monthly',
        priority: route === '' ? 1 : route.startsWith('/blog') ? 0.7 : 0.8,
    }))
}
