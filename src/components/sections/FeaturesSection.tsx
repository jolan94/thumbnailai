"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { User, Images, Languages, Pencil, Palette, Sparkles } from "lucide-react";
import Image from "next/image";

const features = [
    {
        id: "face-embedding",
        icon: User,
        title: "Face Embedding",
        subtitle: "Face-to-Thumbnail",
        description: "Upload your face, and the AI blends it naturally into a professional thumbnail.",
        images: [
            { src: "/features/face-before.png", alt: "Original face photo", label: "Before" },
            { src: "/features/face-after.png", alt: "Face integrated into thumbnail", label: "After" },
        ],
    },
    {
        id: "multi-image",
        icon: Images,
        title: "Multi-Image Support",
        subtitle: "Reference Image Fusion",
        description: "Upload multiple reference photos. AI combines them into a cohesive thumbnail.",
        images: [
            { src: "/features/multi-inputs.png", alt: "Multiple input images", label: "Inputs" },
            { src: "/features/multi-output.png", alt: "Merged thumbnail output", label: "Output" },
        ],
    },
    {
        id: "multilingual",
        icon: Languages,
        title: "Multilingual Generation",
        subtitle: "Global Reach",
        description: "AI automatically generates text in multiple languages for global audiences.",
        images: [
            { src: "/features/lang-english.png", alt: "English thumbnail", label: "English" },
            { src: "/features/lang-spanish.png", alt: "Spanish thumbnail", label: "Spanish" },
        ],
    },
    {
        id: "sketch-to-thumbnail",
        icon: Pencil,
        title: "Sketch → Thumbnail",
        subtitle: "From Idea to Reality",
        description: "Draw a rough sketch, and AI transforms it into a polished thumbnail.",
        images: [
            { src: "/features/sketch-before.png", alt: "Rough sketch", label: "Sketch" },
            { src: "/features/sketch-after.png", alt: "Polished thumbnail", label: "Result" },
        ],
    },
    {
        id: "style-transformation",
        icon: Palette,
        title: "Style Transformation",
        subtitle: "Inspired by the Best",
        description: "Upload a popular thumbnail style and recreate it with your unique content.",
        images: [
            { src: "/features/style-reference.png", alt: "Reference style", label: "Reference" },
            { src: "/features/style-recreated.png", alt: "Recreated in your style", label: "Recreated" },
        ],
    },
    {
        id: "brand-identity",
        icon: Sparkles,
        title: "Brand Identity Learning",
        subtitle: "Consistent & Professional",
        description: "AI learns your brand identity and generates consistent thumbnails every time.",
        images: [
            { src: "/features/brand-identity.png", alt: "Consistent brand thumbnails", label: "Brand Kit" },
        ],
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 },
    },
};

export function FeaturesSection() {
    return (
        <section id="features" className="py-20 lg:py-32 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center max-w-3xl mx-auto mb-16 lg:mb-24"
                >
                    <span className="text-sm font-medium text-accent uppercase tracking-wider">
                        Features
                    </span>
                    <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                        Everything You Need to Create
                        <span className="text-muted-foreground"> Amazing Thumbnails</span>
                    </h2>
                    <p className="mt-6 text-lg text-muted-foreground">
                        Six powerful AI features designed to help you create professional thumbnails in seconds.
                    </p>
                </motion.div>

                {/* Features - 2-column grid for proper 16:9 display */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid lg:grid-cols-2 gap-8 lg:gap-12"
                >
                    {features.map((feature) => (
                        <motion.div key={feature.id} variants={itemVariants}>
                            <Card className="group h-full overflow-hidden hover:shadow-2xl transition-all duration-500 border-border/50 hover:border-accent/30 bg-white">
                                {/* Large 16:9 Image Area - Stacked vertically for dual images */}
                                <div className="p-4 pb-0">
                                    {feature.images.length === 2 ? (
                                        <div className="grid grid-cols-2 gap-3">
                                            {feature.images.map((image, idx) => (
                                                <div key={idx} className="relative aspect-video rounded-xl overflow-hidden bg-muted shadow-sm group-hover:shadow-md transition-shadow">
                                                    <Image
                                                        src={image.src}
                                                        alt={image.alt}
                                                        fill
                                                        className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                                                        sizes="(max-width: 768px) 100vw, 300px"
                                                    />
                                                    {/* Label */}
                                                    <div className="absolute bottom-2 left-2 px-2.5 py-1 bg-black/70 backdrop-blur-sm rounded-md text-[11px] text-white font-semibold">
                                                        {image.label}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    ) : (
                                        <div className="relative aspect-video rounded-xl overflow-hidden bg-muted shadow-sm group-hover:shadow-md transition-shadow">
                                            <Image
                                                src={feature.images[0].src}
                                                alt={feature.images[0].alt}
                                                fill
                                                className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                                                sizes="(max-width: 768px) 100vw, 600px"
                                            />
                                            <div className="absolute bottom-2 left-2 px-2.5 py-1 bg-black/70 backdrop-blur-sm rounded-md text-[11px] text-white font-semibold">
                                                {feature.images[0].label}
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Compact Text Content Below */}
                                <div className="p-5 pt-4">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0 group-hover:bg-accent/10 transition-colors">
                                            <feature.icon className="w-5 h-5 text-foreground group-hover:text-accent transition-colors" />
                                        </div>
                                        <div className="flex-1">
                                            <span className="text-[11px] font-medium text-accent uppercase tracking-wider">
                                                {feature.subtitle}
                                            </span>
                                            <h3 className="text-lg font-semibold leading-tight mt-0.5">{feature.title}</h3>
                                            <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                                                {feature.description}
                                            </p>
                                        </div>
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
