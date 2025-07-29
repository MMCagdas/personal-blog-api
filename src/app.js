import Fastify from "fastify";
import "dotenv/config";
import blogRoutes from "./routes/blogRoutes.js";

const fastify = Fastify({ logger: { level: "warn" } });
const PORT = process.env.PORT || 3000;

fastify.register(blogRoutes);

fastify.listen({ port: PORT }, (err, address) => {
    if (err) {
        fastify.log.error(err);
        process.exit(1);
    }
    console.log(`Server is running on address: ${address}`);
});