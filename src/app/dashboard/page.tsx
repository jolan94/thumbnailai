import { Metadata } from "next";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import DashboardPageClient from "./DashboardPageClient";

export const metadata: Metadata = {
    title: "Create - Thumbly",
    description: "Generate stunning AI-powered thumbnails for your videos",
};

export default async function DashboardPage() {
    const { userId } = await auth();

    if (!userId) {
        redirect("/");
    }

    return <DashboardPageClient />;
}
