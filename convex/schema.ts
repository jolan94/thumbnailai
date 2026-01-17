import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

const schema = defineSchema({
    thumbnails: defineTable({
        userId: v.string(),
        prompt: v.string(),
        imageUrl: v.optional(v.string()),
        status: v.union(v.literal("pending"), v.literal("completed"), v.literal("failed")),
        createdAt: v.number(),
    })
        .index("by_user", ["userId"])
        .index("by_user_created", ["userId", "createdAt"]),
});

export default schema;
