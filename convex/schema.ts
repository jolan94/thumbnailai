import { defineSchema } from "convex/server";
import { authTables } from "@convex-dev/auth/server";

const schema = defineSchema({
    ...authTables,
    // Your other tables can be added here
});

export default schema;
