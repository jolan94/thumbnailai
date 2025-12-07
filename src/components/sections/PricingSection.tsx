"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Toggle } from "@/components/ui/toggle";
import { Check } from "lucide-react";
import Link from "next/link";

const plans = [
    {
        name: "Free",
        description: "Perfect for trying out",
        monthlyPrice: 0,
        yearlyPrice: 0,
        features: [
            "5 thumbnails per month",
            "Basic AI generation",
            "Standard quality",
            "Community support",
        ],
        notIncluded: [
            "Face embedding",
            "Brand identity learning",
            "Priority support",
        ],
        cta: "Get Started Free",
        popular: false,
    },
    {
        name: "Pro",
        description: "For serious creators",
        monthlyPrice: 9.99,
        yearlyPrice: 79.99,
        features: [
            "Unlimited thumbnails",
            "Advanced AI features",
            "4K quality export",
            "Face embedding",
            "Multi-image support",
            "Brand identity learning",
            "Multilingual generation",
            "Priority support",
        ],
        notIncluded: [],
        cta: "Start Pro Trial",
        popular: true,
    },
];

export function PricingSection() {
    const [isYearly, setIsYearly] = useState(false);

    return (
        <section id="pricing" className="py-20 lg:py-32 bg-secondary/30">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center max-w-3xl mx-auto mb-12"
                >
                    <span className="text-sm font-medium text-accent uppercase tracking-wider">
                        Pricing
                    </span>
                    <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                        Simple, Transparent
                        <span className="text-muted-foreground"> Pricing</span>
                    </h2>
                    <p className="mt-6 text-lg text-muted-foreground">
                        Start for free, upgrade when you need more
                    </p>
                </motion.div>

                {/* Billing Toggle */}
                <div className="flex items-center justify-center gap-3 mb-12">
                    <span
                        className={`text-sm font-medium ${!isYearly ? "text-foreground" : "text-muted-foreground"
                            }`}
                    >
                        Monthly
                    </span>
                    <Toggle
                        pressed={isYearly}
                        onPressedChange={setIsYearly}
                        className="data-[state=on]:bg-foreground"
                    >
                        <span className="sr-only">Toggle yearly billing</span>
                    </Toggle>
                    <span
                        className={`text-sm font-medium ${isYearly ? "text-foreground" : "text-muted-foreground"
                            }`}
                    >
                        Yearly
                        <span className="ml-1 text-green-600 text-xs font-semibold">
                            Save 33%
                        </span>
                    </span>
                </div>

                {/* Pricing Cards */}
                <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
                    {plans.map((plan, idx) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                        >
                            <Card
                                className={`h-full p-6 lg:p-8 ${plan.popular
                                    ? "border-accent shadow-lg relative"
                                    : "border-border/50"
                                    }`}
                            >
                                {plan.popular && (
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                                        <span className="px-3 py-1 text-xs font-semibold bg-foreground text-background rounded-full">
                                            Most Popular
                                        </span>
                                    </div>
                                )}

                                <div className="text-center mb-6">
                                    <h3 className="text-xl font-semibold">{plan.name}</h3>
                                    <p className="text-sm text-muted-foreground mt-1">
                                        {plan.description}
                                    </p>
                                </div>

                                <div className="text-center mb-8">
                                    <div className="flex items-baseline justify-center gap-1">
                                        <span className="text-4xl font-bold">
                                            ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                                        </span>
                                        <span className="text-muted-foreground text-sm">
                                            /{isYearly ? "year" : "month"}
                                        </span>
                                    </div>
                                    {isYearly && plan.monthlyPrice > 0 && (
                                        <p className="text-xs text-muted-foreground mt-1">
                                            ${(plan.yearlyPrice / 12).toFixed(2)}/month billed annually
                                        </p>
                                    )}
                                </div>

                                <ul className="space-y-3 mb-8">
                                    {plan.features.map((feature) => (
                                        <li key={feature} className="flex items-center gap-3">
                                            <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                                                <Check className="w-3 h-3 text-green-600" />
                                            </div>
                                            <span className="text-sm">{feature}</span>
                                        </li>
                                    ))}
                                    {plan.notIncluded.map((feature) => (
                                        <li
                                            key={feature}
                                            className="flex items-center gap-3 opacity-50"
                                        >
                                            <div className="w-5 h-5 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                                                <span className="block w-2 h-0.5 bg-muted-foreground rounded" />
                                            </div>
                                            <span className="text-sm text-muted-foreground">
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                <Button
                                    asChild
                                    className={`w-full rounded-full ${plan.popular ? "" : "bg-secondary text-foreground hover:bg-secondary/80"
                                        }`}
                                    size="lg"
                                >
                                    <Link href="https://apps.apple.com/us/app/thumbnail-maker-ai-thumbly/id6746319660" target="_blank">{plan.cta}</Link>
                                </Button>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
