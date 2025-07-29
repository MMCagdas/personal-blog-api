export const blogSchema = {
    body: {
        type: "object",
        required: ["text"],
        properties: {
            text: { type: "string", minLength: 20 },
        },
    },
};
