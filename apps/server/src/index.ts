import Fastify from "fastify";

const app = Fastify({ logger: true });

app.get("/api/status", async () => ({ hosts: [], guests: [], containers: [] }));

await app.listen({ port: 3001, host: "0.0.0.0" });
