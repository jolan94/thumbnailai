"use client";

import { motion } from "framer-motion";
import { Smartphone, Target, Zap } from "lucide-react";

const differentiators = [
    {
        icon: Smartphone,
        title: "Mobile-First Design",
        description: "Built for your phone from day one. Not a desktop tool squeezed onto a small screen.",
    },
    {
        icon: Target,
        title: "AI Trained for YouTube",
        description: "Our AI understands what makes thumbnails click-worthy. Not generic image generation.",
    },
    {
        icon: Zap,
        title: "Seconds, Not Minutes",
        description: "Describe your idea, get a professional thumbnail. No templates, no layers, no learning curve.",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
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

export function WhyDifferentSection() {
    return (
        <section className="py-20 lg:py-24 bg-secondary/30">
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center max-w-2xl mx-auto mb-12"
                >
                    <span className="text-sm font-medium text-accent uppercase tracking-wider">
                        Why Thumbly is Different
                    </span>
                    <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight">
                        Built Different.
                        <span className="text-muted-foreground"> Works Better.</span>
                    </h2>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-3 gap-8"
                >
                    {differentiators.map((item, idx) => (
                        <motion.div
                            key={idx}
                            variants={itemVariants}
                            className="text-center"
                        >
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/5 mb-4">
                                <item.icon className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
