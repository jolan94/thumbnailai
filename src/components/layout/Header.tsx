"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Menu, X, LayoutDashboard } from "lucide-react";
import { StoreBadge } from "@/components/ui/store-badges";
import {
    SignInButton,
    SignUpButton,
    SignedIn,
    SignedOut,
    UserButton,
} from "@clerk/nextjs";

const navLinks = [
    { href: "#features", label: "Features" },
    { href: "#examples", label: "Examples" },
    { href: "/tools/youtube-thumbnail-preview", label: "Tools" },
    { href: "/articles", label: "Learn" },
    { href: "#faq", label: "FAQ" },
];

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? "bg-white/80 backdrop-blur-xl shadow-sm border-b border-border/50"
                : "bg-transparent"
                }`}
        >
            <nav className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 lg:h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-xl overflow-hidden">
                            <Image
                                src="/images/icon.png"
                                alt="Thumbly"
                                width={40}
                                height={40}
                                className="object-cover"
                            />
                        </div>
                        <span className="font-semibold text-lg hidden sm:block">
                            Thumbly
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Auth & CTA Buttons */}
                    <div className="flex items-center gap-3">
                        {/* Auth buttons - Desktop */}
                        <div className="hidden sm:flex items-center gap-2">
                            <SignedOut>
                                <SignInButton mode="modal">
                                    <button className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                                        Sign In
                                    </button>
                                </SignInButton>
                                <SignUpButton mode="modal">
                                    <button className="px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                                        Get Started
                                    </button>
                                </SignUpButton>
                            </SignedOut>
                            <SignedIn>
                                <Link
                                    href="/dashboard"
                                    className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    <LayoutDashboard className="w-4 h-4" />
                                    Dashboard
                                </Link>
                                <UserButton
                                    afterSignOutUrl="/"
                                    appearance={{
                                        elements: {
                                            avatarBox: "w-9 h-9",
                                        },
                                    }}
                                />
                            </SignedIn>
                        </div>

                        {/* Store Badge - Only show when signed out */}
                        <SignedOut>
                            <div className="hidden md:block">
                                <StoreBadge store="apple" size="sm" />
                            </div>
                        </SignedOut>

                        {/* Mobile Menu Toggle */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="lg:hidden p-2 hover:bg-muted rounded-lg transition-colors"
                        >
                            {isMobileMenuOpen ? (
                                <X className="w-5 h-5" />
                            ) : (
                                <Menu className="w-5 h-5" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden pb-4"
                    >
                        <div className="flex flex-col gap-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
                                >
                                    {link.label}
                                </Link>
                            ))}

                            {/* Mobile Auth */}
                            <div className="px-4 py-2 border-t border-border/50 mt-2 pt-4">
                                <SignedOut>
                                    <div className="flex flex-col gap-2">
                                        <SignInButton mode="modal">
                                            <button className="w-full px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors text-left">
                                                Sign In
                                            </button>
                                        </SignInButton>
                                        <SignUpButton mode="modal">
                                            <button className="w-full px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                                                Get Started
                                            </button>
                                        </SignUpButton>
                                    </div>
                                </SignedOut>
                                <SignedIn>
                                    <div className="flex flex-col gap-2">
                                        <Link
                                            href="/dashboard"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
                                        >
                                            <LayoutDashboard className="w-4 h-4" />
                                            Dashboard
                                        </Link>
                                        <div className="px-4 py-2 flex items-center gap-3">
                                            <UserButton afterSignOutUrl="/" />
                                            <span className="text-sm text-muted-foreground">Your Account</span>
                                        </div>
                                    </div>
                                </SignedIn>
                            </div>

                            <div className="px-4 py-2 flex gap-2">
                                <StoreBadge store="apple" size="sm" />
                                <StoreBadge store="google" size="sm" />
                            </div>
                        </div>
                    </motion.div>
                )}
            </nav>
        </motion.header>
    );
}
