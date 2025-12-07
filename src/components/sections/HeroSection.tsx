"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { StoreBadges } from "@/components/ui/store-badges";

export function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center justify-center gradient-hero overflow-hidden">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(100,116,139,0.1),transparent_50%)]" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-16 lg:pt-32 lg:pb-24">
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
                            Now available on iOS & Android
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-balance"
                        >
                            Generate Stunning Thumbnails Instantly
                            <span className="text-muted-foreground"> — No Design Skills Needed.</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                            className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0"
                        >
                            Create high-performing thumbnails using AI. Use your face, sketches, brand identity, or inspiration images — all in one app.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                            className="mt-8 flex justify-center lg:justify-start"
                        >
                            <StoreBadges size="lg" />
                        </motion.div>

                        {/* Social Proof */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6, duration: 0.5 }}
                            className="mt-10 flex items-center gap-4 justify-center lg:justify-start"
                        >
                            <div className="flex -space-x-2">
                                {[...Array(4)].map((_, i) => (
                                    <div
                                        key={i}
                                        className="w-8 h-8 rounded-full bg-muted border-2 border-background"
                                    />
                                ))}
                            </div>
                            <div className="text-sm text-muted-foreground">
                                <span className="font-semibold text-foreground">10,000+</span> creators trust us
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Phone Mockup with App Screenshot */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="relative flex justify-center"
                    >
                        <div className="relative">
                            {/* Phone Frame */}
                            <div className="w-[280px] h-[560px] sm:w-[300px] sm:h-[600px] bg-foreground rounded-[3rem] p-3 shadow-2xl shadow-foreground/10">
                                <div className="w-full h-full rounded-[2.5rem] overflow-hidden bg-muted">
                                    <Image
                                        src="/images/thumbly.png"
                                        alt="Thumbly App Screenshot"
                                        width={300}
                                        height={600}
                                        className="w-full h-full object-cover"
                                        priority
                                    />
                                </div>
                            </div>

                            {/* Floating Before Element */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.8, duration: 0.5 }}
                                className="absolute -left-8 top-20 w-28 h-16 bg-white rounded-xl shadow-lg border border-border overflow-hidden"
                            >
                                <Image
                                    src="/images/before.jpeg"
                                    alt="Before"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                                    <span className="text-xs text-white font-semibold">Before</span>
                                </div>
                            </motion.div>

                            {/* Floating After Element */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.9, duration: 0.5 }}
                                className="absolute -right-8 bottom-32 w-28 h-16 bg-white rounded-xl shadow-lg border border-border overflow-hidden"
                            >
                                <Image
                                    src="/images/after.jpeg"
                                    alt="After"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                                    <span className="text-xs text-white font-semibold">After</span>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
