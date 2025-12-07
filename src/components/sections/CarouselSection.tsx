"use client";

import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

// Row 1: Thumbnails 1-12
const row1Thumbnails = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    src: `/thumbnails/thumnail_${i + 1}.jpeg`,
    title: `Thumbnail ${i + 1}`,
}));

// Row 2: Thumbnails 13-24
const row2Thumbnails = Array.from({ length: 12 }, (_, i) => ({
    id: i + 13,
    src: `/thumbnails/thumnail_${i + 13}.jpeg`,
    title: `Thumbnail ${i + 13}`,
}));

// Row 3: Thumbnails 25-36
const row3Thumbnails = Array.from({ length: 12 }, (_, i) => ({
    id: i + 25,
    src: `/thumbnails/thumnail_${i + 25}.jpeg`,
    title: `Thumbnail ${i + 25}`,
}));

interface CarouselRowProps {
    thumbnails: typeof row1Thumbnails;
    direction: "left" | "right";
    speed: number;
}

function CarouselRow({ thumbnails, direction, speed }: CarouselRowProps) {
    const [isPaused, setIsPaused] = useState(false);
    const controls = useAnimationControls();

    const translateDistance = 3600; // Width for seamless loop with 12 items

    useEffect(() => {
        if (!isPaused) {
            controls.start({
                x: direction === "left" ? [0, -translateDistance] : [-translateDistance, 0],
                transition: {
                    x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: speed,
                        ease: "linear",
                    },
                },
            });
        } else {
            controls.stop();
        }
    }, [isPaused, controls, direction, speed]);

    return (
        <div
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="overflow-hidden"
        >
            <motion.div animate={controls} className="flex gap-4">
                {/* Double the items for seamless loop */}
                {[...thumbnails, ...thumbnails].map((thumb, idx) => (
                    <motion.div
                        key={`${thumb.id}-${idx}`}
                        whileHover={{ scale: 1.05, y: -6 }}
                        className="flex-shrink-0 group cursor-pointer"
                    >
                        <div className="relative w-72 aspect-video rounded-xl overflow-hidden shadow-md group-hover:shadow-2xl transition-all duration-300 border border-border/20">
                            <Image
                                src={thumb.src}
                                alt={thumb.title}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-500"
                                sizes="288px"
                            />
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}

export function CarouselSection() {
    return (
        <section id="examples" className="py-20 lg:py-32 bg-secondary/30 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center max-w-3xl mx-auto"
                >
                    <span className="text-sm font-medium text-accent uppercase tracking-wider">
                        Examples
                    </span>
                    <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                        Stunning Thumbnails for
                        <span className="text-muted-foreground"> Every Niche</span>
                    </h2>
                    <p className="mt-6 text-lg text-muted-foreground">
                        From gaming to cooking, tech to fitness — see what AI can create for you
                    </p>
                </motion.div>
            </div>

            {/* Three-row carousel with alternating directions */}
            <div className="space-y-4">
                {/* Row 1 - Left scroll */}
                <div className="relative">
                    <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-secondary/30 to-transparent z-10 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-secondary/30 to-transparent z-10 pointer-events-none" />
                    <CarouselRow thumbnails={row1Thumbnails} direction="left" speed={50} />
                </div>

                {/* Row 2 - Right scroll */}
                <div className="relative">
                    <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-secondary/30 to-transparent z-10 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-secondary/30 to-transparent z-10 pointer-events-none" />
                    <CarouselRow thumbnails={row2Thumbnails} direction="right" speed={55} />
                </div>

                {/* Row 3 - Left scroll */}
                <div className="relative">
                    <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-secondary/30 to-transparent z-10 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-secondary/30 to-transparent z-10 pointer-events-none" />
                    <CarouselRow thumbnails={row3Thumbnails} direction="left" speed={60} />
                </div>
            </div>
        </section>
    );
}
