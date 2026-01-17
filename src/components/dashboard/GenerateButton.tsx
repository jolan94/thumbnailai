"use client";

import { motion } from "framer-motion";
import { Sparkles, Loader2 } from "lucide-react";

interface GenerateButtonProps {
    onClick: () => void;
    isLoading?: boolean;
    disabled?: boolean;
}

export function GenerateButton({ onClick, isLoading, disabled }: GenerateButtonProps) {
    return (
        <motion.button
            onClick={onClick}
            disabled={disabled || isLoading}
            whileHover={{ scale: disabled ? 1 : 1.02 }}
            whileTap={{ scale: disabled ? 1 : 0.98 }}
            className="
                w-full py-4 px-6 rounded-2xl font-semibold text-white
                bg-gradient-to-r from-orange-500 to-orange-400
                hover:from-orange-600 hover:to-orange-500
                disabled:from-orange-300 disabled:to-orange-200 disabled:cursor-not-allowed
                transition-all duration-200
                flex items-center justify-center gap-2
                shadow-lg shadow-orange-500/25
            "
        >
            {isLoading ? (
                <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Generating...</span>
                </>
            ) : (
                <>
                    <Sparkles className="w-5 h-5" />
                    <span>Generate</span>
                </>
            )}
        </motion.button>
    );
}
