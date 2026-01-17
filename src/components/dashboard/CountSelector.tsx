"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";

interface CountSelectorProps {
    value: number;
    onChange: (value: number) => void;
    min?: number;
    max?: number;
    disabled?: boolean;
}

export function CountSelector({
    value,
    onChange,
    min = 1,
    max = 4,
    disabled,
}: CountSelectorProps) {
    const decrement = () => {
        if (value > min) {
            onChange(value - 1);
        }
    };

    const increment = () => {
        if (value < max) {
            onChange(value + 1);
        }
    };

    return (
        <div className="flex items-center gap-1">
            <motion.button
                type="button"
                onClick={decrement}
                disabled={disabled || value <= min}
                whileTap={{ scale: 0.9 }}
                className="
                    w-8 h-8 rounded-lg
                    flex items-center justify-center
                    bg-muted hover:bg-muted/80
                    disabled:opacity-40 disabled:cursor-not-allowed
                    transition-colors
                "
            >
                <Minus className="w-4 h-4" />
            </motion.button>

            <div className="w-8 h-8 flex items-center justify-center">
                <span className="font-semibold text-sm tabular-nums">
                    {value}
                </span>
            </div>

            <motion.button
                type="button"
                onClick={increment}
                disabled={disabled || value >= max}
                whileTap={{ scale: 0.9 }}
                className="
                    w-8 h-8 rounded-lg
                    flex items-center justify-center
                    bg-muted hover:bg-muted/80
                    disabled:opacity-40 disabled:cursor-not-allowed
                    transition-colors
                "
            >
                <Plus className="w-4 h-4" />
            </motion.button>
        </div>
    );
}
