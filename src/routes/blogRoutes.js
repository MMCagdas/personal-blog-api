import {
    getAllBlogs,
    getBlogById,
    createBlog,
    updateBlog,
    deleteBlog,
} from "../controllers/blogController.js";

import { blogSchema } from "../schemas/blogSchema.js";

export default async function (fastify, options) {
    fastify.get("/blogs", getAllBlogs);
    fastify.get("/blogs/:id", getBlogById);
    fastify.post("/blogs", { schema: blogSchema }, createBlog);
    fastify.patch("/blogs/:id", { schema: blogSchema }, updateBlog);
    fastify.delete("/blogs/:id", deleteBlog);
}
