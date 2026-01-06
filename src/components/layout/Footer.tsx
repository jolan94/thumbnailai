import Link from "next/link";
import Image from "next/image";

const footerLinks = {
    product: [
        { href: "/#features", label: "Features" },
        { href: "/#faq", label: "FAQ" },
        { href: "/blog", label: "Blog" },
    ],
    tools: [
        { href: "/ai-youtube-thumbnail-generator", label: "AI Thumbnail Generator" },
        { href: "/youtube-thumbnail-maker", label: "Thumbnail Maker" },
        { href: "/gaming-thumbnail-maker", label: "Gaming Thumbnails" },
        { href: "/faceless-youtube-thumbnail-generator", label: "Faceless Thumbnails" },
    ],
    legal: [
        { href: "/privacy", label: "Privacy Policy" },
        { href: "/terms", label: "Terms of Service" },
    ],
    social: [
        { href: "#", label: "Twitter" },
        { href: "#", label: "Instagram" },
        { href: "#", label: "YouTube" },
    ],
};

export function Footer() {
    return (
        <footer className="bg-secondary/50 border-t border-border">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12">
                    {/* Brand */}
                    <div className="col-span-2 md:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <div className="w-10 h-10 rounded-xl overflow-hidden">
                                <Image
                                    src="/images/icon.png"
                                    alt="Thumbly"
                                    width={40}
                                    height={40}
                                    className="object-cover"
                                />
                            </div>
                            <span className="font-semibold">Thumbly</span>
                        </Link>
                        <p className="text-sm text-muted-foreground max-w-xs">
                            Create stunning thumbnails instantly using AI. No design skills required.
                        </p>
                    </div>

                    {/* Product Links */}
                    <div>
                        <h4 className="font-semibold mb-4">Product</h4>
                        <ul className="space-y-3">
                            {footerLinks.product.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Tools Links */}
                    <div>
                        <h4 className="font-semibold mb-4">Tools</h4>
                        <ul className="space-y-3">
                            {footerLinks.tools.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div>
                        <h4 className="font-semibold mb-4">Legal</h4>
                        <ul className="space-y-3">
                            {footerLinks.legal.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h4 className="font-semibold mb-4">Connect</h4>
                        <ul className="space-y-3">
                            {footerLinks.social.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-muted-foreground">
                        © {new Date().getFullYear()} AI Thumbnail Generator. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        <Link
                            href="/privacy"
                            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                            Privacy
                        </Link>
                        <Link
                            href="/terms"
                            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                            Terms
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
