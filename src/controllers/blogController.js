import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getAllBlogs = async (request, reply) => {
    try {
        const blogs = await prisma.blog.findMany();
        reply.code(200).send(blogs);
    } catch (e) {
        reply.code(500).send({ error: "Internal Server Error" });
    }
};

export const getBlogById = async (request, reply) => {
    const id = parseInt(request.params.id);

    if (isNaN(id)) return reply.code(400).send({ error: "Invalid ID" });

    try {
        const blog = await prisma.blog.findFirst({ where: { id } });
        if (!blog) return reply.code(404).send({ error: "Blog not found" });
        reply.code(200).send(blog);
    } catch (e) {
        reply.code(500).send({ error: "Internal Server Error" });
    }
};

export const createBlog = async (request, reply) => {
    const { text } = request.body;

    try {
        const newBlog = await prisma.blog.create({
            data: { text },
        });
        reply.code(201).send(newBlog);
    } catch (e) {
        reply.code(500).send({ error: "Internal Server Error" });
    }
};

export const updateBlog = async (request, reply) => {
    const id = parseInt(request.params.id);
    const { text } = request.body;

    if (isNaN(id)) return reply.code(400).send({ error: "Invalid ID" });

    try {
        const updatedBlog = await prisma.blog.update({
            where: { id },
            data: { text },
        });
        reply.code(200).send(updatedBlog);
    } catch (e) {
        if (e.code === 'P2025') {
            reply.code(404).send({ error: "Blog not found" });
        } else {
            reply.code(500).send({ error: "Internal Server Error" });
        }
    }
};

export const deleteBlog = async (request, reply) => {
    const id = parseInt(request.params.id);

    if (isNaN(id)) return reply.code(400).send({ error: "Invalid ID" });

    try {
        await prisma.blog.delete({ where: { id } });
        reply.code(204).send();
    } catch (e) {
        if (e.code === 'P2025') {
            reply.code(404).send({ error: "Blog not found" });
        } else {
            reply.code(500).send({ error: "Internal Server Error" });
        }
    }
};
