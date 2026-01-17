import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ConvexClientProvider } from "@/components/providers/ConvexClientProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://thumbnailai.pro'),
  title: "AI Thumbnail Generator - Create Stunning Thumbnails Instantly",
  description:
    "Generate professional thumbnails using AI. Use your face, sketches, brand identity, or inspiration images — all in one app. Available on iOS and Android.",
  keywords: [
    "AI thumbnail generator",
    "YouTube thumbnails",
    "thumbnail maker",
    "AI design",
    "content creator tools",
  ],
  authors: [{ name: "AI Thumbnail Generator" }],
  openGraph: {
    title: "AI Thumbnail Generator - Create Stunning Thumbnails Instantly",
    description:
      "Generate professional thumbnails using AI. No design skills needed.",
    type: "website",
    locale: "en_US",
    url: "https://thumbnailai.pro",
    siteName: "AI Thumbnail Generator",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AI Thumbnail Generator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Thumbnail Generator - Create Stunning Thumbnails Instantly",
    description:
      "Generate professional thumbnails using AI. No design skills needed.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" className="scroll-smooth" suppressHydrationWarning>
        <body className={`${inter.variable} font-sans antialiased`} suppressHydrationWarning>
          <ConvexClientProvider>
            {children}
          </ConvexClientProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}

