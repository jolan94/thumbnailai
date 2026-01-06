"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { StoreBadges } from "@/components/ui/store-badges";
import { Card } from "@/components/ui/card";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SEOPageData } from "@/lib/seo-page-data";
import { Check, Zap, Sparkles, Palette, ArrowRight, ChevronDown } from "lucide-react";

interface SEOLandingPageProps {
    data: SEOPageData;
}

const features = [
    { icon: Zap, text: "Generate thumbnails in seconds" },
    { icon: Check, text: "No design skills required" },
    { icon: Sparkles, text: "AI-powered creativity" },
    { icon: Palette, text: "Consistent brand identity" },
];

export function SEOLandingPage({ data }: SEOLandingPageProps) {
    return (
        <>
            <Header />
            <main>
                {/* Hero Section */}
                <section className="relative min-h-[80vh] flex items-center gradient-hero overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(100,116,139,0.1),transparent_50%)]" />

                    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
                        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                            {/* Text Content */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                className="text-center lg:text-left"
                            >
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1, duration: 0.5 }}
                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-sm text-muted-foreground mb-6"
                                >
                                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                    Free to try — no credit card required
                                </motion.div>

                                <motion.h1
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2, duration: 0.5 }}
                                    className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight"
                                >
                                    {data.h1}
                                </motion.h1>

                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3, duration: 0.5 }}
                                    className="mt-4 text-xl text-muted-foreground"
                                >
                                    {data.subtitle}
                                </motion.p>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4, duration: 0.5 }}
                                    className="mt-8 flex justify-center lg:justify-start"
                                >
                                    <StoreBadges size="lg" />
                                </motion.div>

                                {/* Feature Pills */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.5, duration: 0.5 }}
                                    className="mt-8 flex flex-wrap gap-3 justify-center lg:justify-start"
                                >
                                    {features.map((feature, idx) => (
                                        <div
                                            key={idx}
                                            className="flex items-center gap-2 px-3 py-2 bg-secondary rounded-full text-sm"
                                        >
                                            <feature.icon className="w-4 h-4 text-green-600" />
                                            <span className="text-muted-foreground">{feature.text}</span>
                                        </div>
                                    ))}
                                </motion.div>
                            </motion.div>

                            {/* Thumbnail Showcase */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.3, duration: 0.6 }}
                                className="relative"
                            >
                                <div className="grid grid-cols-2 gap-4">
                                    {data.thumbnailImages.slice(0, 3).map((img, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.4 + idx * 0.1, duration: 0.5 }}
                                            className={`relative aspect-video rounded-xl overflow-hidden shadow-lg ${idx === 0 ? 'col-span-2' : ''
                                                }`}
                                        >
                                            <Image
                                                src={img}
                                                alt={`${data.h1} example ${idx + 1}`}
                                                fill
                                                className="object-cover"
                                                sizes={idx === 0 ? "(max-width: 768px) 100vw, 600px" : "(max-width: 768px) 50vw, 300px"}
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Content Section */}
                <section className="py-20 lg:py-32 bg-white">
                    <div className="max-w-4xl mx-auto px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="prose prose-lg max-w-none"
                        >
                            <h2 className="text-3xl font-bold mb-8">Why Choose Our {data.h1}?</h2>
                            <div className="text-muted-foreground space-y-4 whitespace-pre-line">
                                {data.content}
                            </div>
                        </motion.div>

                        {/* CTA in content */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="mt-12 p-8 bg-secondary/50 rounded-2xl text-center"
                        >
                            <h3 className="text-2xl font-bold mb-4">Ready to Create Amazing Thumbnails?</h3>
                            <p className="text-muted-foreground mb-6">
                                Download the app and create your first thumbnail in under 30 seconds.
                            </p>
                            <StoreBadges size="md" />
                        </motion.div>
                    </div>
                </section>

                {/* FAQ Section with JSON-LD */}
                <section className="py-20 lg:py-32 bg-secondary/30">
                    <div className="max-w-4xl mx-auto px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="text-center mb-12"
                        >
                            <span className="text-sm font-medium text-accent uppercase tracking-wider">
                                FAQ
                            </span>
                            <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight">
                                Frequently Asked Questions
                            </h2>
                        </motion.div>

                        <div className="space-y-4">
                            {data.faqs.map((faq, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                                >
                                    <Card className="p-6">
                                        <details className="group">
                                            <summary className="flex items-center justify-between cursor-pointer list-none">
                                                <h3 className="font-semibold text-lg pr-4">{faq.question}</h3>
                                                <ChevronDown className="w-5 h-5 text-muted-foreground transition-transform group-open:rotate-180" />
                                            </summary>
                                            <p className="mt-4 text-muted-foreground">{faq.answer}</p>
                                        </details>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="py-20 lg:py-32 bg-white">
                    <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                                Start Creating Thumbnails
                                <span className="text-muted-foreground"> Today</span>
                            </h2>
                            <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10">
                                Join thousands of creators using AI to create professional thumbnails in seconds.
                            </p>

                            <StoreBadges size="lg" />

                            <div className="mt-8">
                                <Link
                                    href="/"
                                    className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    Learn more about all features
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </main>
            <Footer />

            {/* FAQ Schema JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": data.faqs.map(faq => ({
                            "@type": "Question",
                            "name": faq.question,
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": faq.answer
                            }
                        }))
                    })
                }}
            />
        </>
    );
}
