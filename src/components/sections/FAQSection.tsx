"use client";

import { motion } from "framer-motion";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
    {
        question: "Can I use the thumbnails commercially?",
        answer:
            "Yes! All thumbnails you create with AI Thumbnail Generator are yours to use commercially. You retain full ownership and can use them on YouTube, social media, websites, and any other platform without restrictions.",
    },
    {
        question: "Do I need design skills to use this app?",
        answer:
            "Absolutely not. That's the whole point! Our AI handles all the design work. You just provide your input — whether it's a photo, sketch, or text description — and the AI creates professional thumbnails for you.",
    },
    {
        question: "Is my data secure?",
        answer:
            "Yes, we take data security very seriously. Your photos and generated thumbnails are encrypted and stored securely. We never share your data with third parties, and you can delete your data at any time from your account settings.",
    },
    {
        question: "How accurate is the AI face embedding?",
        answer:
            "Our face embedding technology is highly accurate and produces natural-looking results. The AI is trained to blend your face seamlessly into various thumbnail styles while maintaining realistic lighting, angles, and expressions.",
    },
    {
        question: "Does it work in any language?",
        answer:
            "Yes! Our multilingual feature supports text generation in over 50 languages, including English, Spanish, Hindi, Japanese, Korean, Arabic, and many more. The AI automatically handles typography and text styling for each language.",
    },
    {
        question: "Can I cancel my subscription anytime?",
        answer:
            "Yes, you can cancel your Pro subscription at any time. You'll continue to have access to Pro features until the end of your billing period. After that, your account will revert to the free plan.",
    },
    {
        question: "What image formats are supported?",
        answer:
            "We support all major image formats including JPG, PNG, WEBP, and HEIC. You can export your thumbnails in high-resolution PNG or JPG format, optimized for YouTube and social media platforms.",
    },
];

export function FAQSection() {
    return (
        <section id="faq" className="py-20 lg:py-32 bg-white">
            <div className="max-w-4xl mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center max-w-3xl mx-auto mb-12"
                >
                    <span className="text-sm font-medium text-accent uppercase tracking-wider">
                        FAQ
                    </span>
                    <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                        Frequently Asked
                        <span className="text-muted-foreground"> Questions</span>
                    </h2>
                    <p className="mt-6 text-lg text-muted-foreground">
                        Everything you need to know about AI Thumbnail Generator
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    <Accordion type="single" collapsible className="w-full">
                        {faqs.map((faq, idx) => (
                            <AccordionItem key={idx} value={`item-${idx}`}>
                                <AccordionTrigger className="text-left hover:no-underline py-6">
                                    <span className="font-medium pr-4">{faq.question}</span>
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground pb-6">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </motion.div>
            </div>
        </section>
    );
}
