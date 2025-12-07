"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { TrendingUp, Target, UserCheck, Wand2 } from "lucide-react";

const valueProps = [
    {
        icon: TrendingUp,
        title: "Higher Click-Through Rate",
        description: "Thumbnails optimized for maximum engagement and viewer attention.",
    },
    {
        icon: Target,
        title: "Trend-Based Design",
        description: "AI models trained on the latest trending thumbnail styles and patterns.",
    },
    {
        icon: UserCheck,
        title: "Creator Personalization",
        description: "Your unique style and brand identity, applied consistently.",
    },
    {
        icon: Wand2,
        title: "No Photoshop Needed",
        description: "Professional results without complex software or design skills.",
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

export function ValueProposition() {
    return (
        <section className="py-20 lg:py-32 bg-secondary/30">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <span className="text-sm font-medium text-accent uppercase tracking-wider">
                        Why It Works
                    </span>
                    <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                        Built for
                        <span className="text-muted-foreground"> Creator Success</span>
                    </h2>
                    <p className="mt-6 text-lg text-muted-foreground">
                        Our AI understands what makes thumbnails perform
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {valueProps.map((prop, idx) => (
                        <motion.div key={idx} variants={itemVariants}>
                            <Card className="h-full p-6 text-center hover:shadow-lg transition-all duration-300 border-border/50 hover:border-accent/30 bg-white">
                                <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mx-auto mb-5">
                                    <prop.icon className="w-7 h-7 text-foreground" />
                                </div>
                                <h3 className="font-semibold text-lg mb-2">{prop.title}</h3>
                                <p className="text-sm text-muted-foreground">{prop.description}</p>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
