"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
    {
        id: 1,
        name: "Alex Rivera",
        role: "YouTube Creator",
        subscribers: "1.2M subscribers",
        quote: "My CTR increased by 40% after switching to AI-generated thumbnails. The face embedding feature is incredibly natural.",
        rating: 5,
    },
    {
        id: 2,
        name: "Sarah Chen",
        role: "Content Strategist",
        subscribers: "Tech & Business",
        quote: "Finally, a tool that understands brand consistency. Every thumbnail looks like part of my channel's identity.",
        rating: 5,
    },
    {
        id: 3,
        name: "Marcus Johnson",
        role: "Gaming Creator",
        subscribers: "850K subscribers",
        quote: "The sketch-to-thumbnail feature is pure magic. I can visualize ideas in seconds and get pro results.",
        rating: 5,
    },
    {
        id: 4,
        name: "Elena Rodriguez",
        role: "Educational Creator",
        subscribers: "2.1M subscribers",
        quote: "Multilingual support is a game-changer. I reach global audiences with consistent, localized thumbnails.",
        rating: 5,
    },
    {
        id: 5,
        name: "David Park",
        role: "Lifestyle Vlogger",
        subscribers: "500K subscribers",
        quote: "I used to spend hours on Photoshop. Now I create better thumbnails in minutes. Worth every penny.",
        rating: 5,
    },
    {
        id: 6,
        name: "Priya Sharma",
        role: "Cooking Channel",
        subscribers: "3.5M subscribers",
        quote: "The style transformation feature helped me refresh my entire channel aesthetic. Views went up 60%!",
        rating: 5,
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 },
    },
};

export function TestimonialsSection() {
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
                        Testimonials
                    </span>
                    <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                        Loved by
                        <span className="text-muted-foreground"> Creators Worldwide</span>
                    </h2>
                    <p className="mt-6 text-lg text-muted-foreground">
                        See what content creators are saying about AI Thumbnail Generator
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {testimonials.map((testimonial) => (
                        <motion.div key={testimonial.id} variants={itemVariants}>
                            <Card className="h-full p-6 hover:shadow-lg transition-all duration-300 border-border/50">
                                {/* Rating */}
                                <div className="flex gap-1 mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className="w-4 h-4 fill-yellow-400 text-yellow-400"
                                        />
                                    ))}
                                </div>

                                {/* Quote */}
                                <p className="text-foreground mb-6 leading-relaxed">
                                    &ldquo;{testimonial.quote}&rdquo;
                                </p>

                                {/* Author */}
                                <div className="flex items-center gap-3">
                                    {/* Avatar Placeholder */}
                                    <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                                        <span className="text-sm font-semibold text-muted-foreground">
                                            {testimonial.name.charAt(0)}
                                        </span>
                                    </div>
                                    <div>
                                        <p className="font-medium text-sm">{testimonial.name}</p>
                                        <p className="text-xs text-muted-foreground">
                                            {testimonial.role} • {testimonial.subscribers}
                                        </p>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
