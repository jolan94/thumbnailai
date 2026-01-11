"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function BeforeAfterSection() {
    return (
        <section className="py-20 lg:py-32 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center max-w-2xl mx-auto mb-16"
                >
                    <span className="text-sm font-medium text-accent uppercase tracking-wider">
                        The Transformation
                    </span>
                    <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                        See the Difference
                        <span className="text-muted-foreground"> AI Makes</span>
                    </h2>
                    <p className="mt-6 text-lg text-muted-foreground">
                        From amateur to professional in seconds. No design skills required.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-8 items-center max-w-5xl mx-auto">
                    {/* Before */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="space-y-4"
                    >
                        <div className="relative aspect-video rounded-xl overflow-hidden border-2 border-dashed border-muted shadow-sm">
                            <Image
                                src="/comparison/before-example.png"
                                alt="Before - Amateur thumbnail"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 400px"
                            />
                            <div className="absolute top-4 left-4 px-4 py-2 bg-destructive text-white text-sm font-semibold rounded-lg shadow-lg">
                                BEFORE
                            </div>
                        </div>
                        <div className="text-center lg:text-left">
                            <p className="text-sm text-muted-foreground">
                                Basic, uninspiring, gets lost in the feed
                            </p>
                        </div>
                    </motion.div>

                    {/* Arrow */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="hidden lg:flex items-center justify-center"
                    >
                        <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                            <ArrowRight className="w-6 h-6 text-primary-foreground" />
                        </div>
                    </motion.div>

                    {/* Mobile Arrow */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="lg:hidden flex items-center justify-center -my-4"
                    >
                        <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center rotate-90">
                            <ArrowRight className="w-6 h-6 text-primary-foreground" />
                        </div>
                    </motion.div>

                    {/* After */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="space-y-4"
                    >
                        <div className="relative aspect-video rounded-xl overflow-hidden border-2 border-green-500/30 shadow-xl shadow-green-500/10">
                            <Image
                                src="/comparison/after-example.png"
                                alt="After - Professional AI-generated thumbnail"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 400px"
                            />
                            <div className="absolute top-4 left-4 px-4 py-2 bg-green-500 text-white text-sm font-semibold rounded-lg shadow-lg">
                                AFTER
                            </div>
                        </div>
                        <div className="text-center lg:text-right">
                            <p className="text-sm font-medium text-foreground">
                                Professional, eye-catching, drives clicks ✨
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
