import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

// List thumbnails for a user (newest first)
export const list = query({
    args: {
        limit: v.optional(v.number()),
    },
    handler: async (ctx, args) => {
        const identity = await ctx.auth.getUserIdentity();
        if (!identity) {
            return [];
        }

        const userId = identity.subject;
        const limit = args.limit ?? 50;

        const thumbnails = await ctx.db
            .query("thumbnails")
            .withIndex("by_user_created", (q) => q.eq("userId", userId))
            .order("desc")
            .take(limit);

        return thumbnails;
    },
});

// Get recent thumbnails (last 5) for preview
export const recent = query({
    args: {},
    handler: async (ctx) => {
        const identity = await ctx.auth.getUserIdentity();
        if (!identity) {
            return [];
        }

        const userId = identity.subject;

        const thumbnails = await ctx.db
            .query("thumbnails")
            .withIndex("by_user_created", (q) => q.eq("userId", userId))
            .order("desc")
            .take(5);

        return thumbnails;
    },
});

// Create a new pending thumbnail
export const create = mutation({
    args: {
        prompt: v.string(),
    },
    handler: async (ctx, args) => {
        const identity = await ctx.auth.getUserIdentity();
        if (!identity) {
            throw new Error("Not authenticated");
        }

        const userId = identity.subject;

        const thumbnailId = await ctx.db.insert("thumbnails", {
            userId,
            prompt: args.prompt,
            status: "pending",
            createdAt: Date.now(),
        });

        return thumbnailId;
    },
});

// Update thumbnail status (mark as completed or failed)
export const updateStatus = mutation({
    args: {
        id: v.id("thumbnails"),
        status: v.union(v.literal("completed"), v.literal("failed")),
        imageUrl: v.optional(v.string()),
    },
    handler: async (ctx, args) => {
        const identity = await ctx.auth.getUserIdentity();
        if (!identity) {
            throw new Error("Not authenticated");
        }

        const thumbnail = await ctx.db.get(args.id);
        if (!thumbnail) {
            throw new Error("Thumbnail not found");
        }

        if (thumbnail.userId !== identity.subject) {
            throw new Error("Not authorized");
        }

        await ctx.db.patch(args.id, {
            status: args.status,
            imageUrl: args.imageUrl,
        });

        return args.id;
    },
});
