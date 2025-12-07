"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { X, Check, Clock, DollarSign, Brush, AlertCircle, Zap, Star, Repeat, Gift } from "lucide-react";
import Image from "next/image";

const manualSide = [
    { icon: Clock, text: "Slow — hours per thumbnail" },
    { icon: DollarSign, text: "Expensive — $20-100 per design" },
    { icon: Brush, text: "Requires design skills" },
    { icon: AlertCircle, text: "Inconsistent results" },
];

const aiSide = [
    { icon: Zap, text: "Instant — seconds per thumbnail" },
    { icon: Star, text: "Professional quality" },
    { icon: Repeat, text: "Consistent every time" },
    { icon: Gift, text: "Free to try" },
];

export function ComparisonSection() {
    return (
        <section className="py-20 lg:py-32 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <span className="text-sm font-medium text-accent uppercase tracking-wider">
                        Comparison
                    </span>
                    <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                        The Old Way vs.
                        <span className="text-muted-foreground"> The AI Way</span>
                    </h2>
                    <p className="mt-6 text-lg text-muted-foreground">
                        See why thousands of creators are switching to AI-powered thumbnail generation
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
                    {/* Manual / Hiring Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <Card className="p-6 lg:p-8 border-destructive/20 bg-destructive/5 h-full">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center">
                                    <X className="w-5 h-5 text-destructive" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg">Manual Design / Hiring</h3>
                                    <p className="text-sm text-muted-foreground">The traditional approach</p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                {manualSide.map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-destructive/10 flex items-center justify-center flex-shrink-0">
                                            <item.icon className="w-4 h-4 text-destructive" />
                                        </div>
                                        <span className="text-sm text-muted-foreground">{item.text}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Before Thumbnail */}
                            <div className="mt-8 relative aspect-video rounded-xl overflow-hidden border-2 border-dashed border-destructive/30">
                                <Image
                                    src="/images/before.jpeg"
                                    alt="Before - Amateur thumbnail"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 400px"
                                />
                                <div className="absolute top-3 left-3 px-3 py-1 bg-destructive text-white text-xs font-semibold rounded-full">
                                    BEFORE
                                </div>
                            </div>
                        </Card>
                    </motion.div>

                    {/* AI Generator Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <Card className="p-6 lg:p-8 border-green-500/20 bg-green-50/50 h-full">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center">
                                    <Check className="w-5 h-5 text-green-600" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg">AI Thumbnail Generator</h3>
                                    <p className="text-sm text-muted-foreground">The smart approach</p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                {aiSide.map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center flex-shrink-0">
                                            <item.icon className="w-4 h-4 text-green-600" />
                                        </div>
                                        <span className="text-sm text-foreground">{item.text}</span>
                                    </div>
                                ))}
                            </div>

                            {/* After Thumbnail */}
                            <div className="mt-8 relative aspect-video rounded-xl overflow-hidden border-2 border-green-500/30 shadow-lg shadow-green-500/10">
                                <Image
                                    src="/images/after.jpeg"
                                    alt="After - AI-generated professional thumbnail"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 400px"
                                />
                                <div className="absolute top-3 left-3 px-3 py-1 bg-green-500 text-white text-xs font-semibold rounded-full">
                                    AFTER
                                </div>
                            </div>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
