import { Hono } from "hono";
import { cors } from "hono/cors";
import { serveStatic } from "hono/bun";
import { auth } from "./auth";

const app = new Hono();

app.use("/api/**", cors());

app.on(["POST", "GET"], "/api/auth/**", (c) => auth.handler(c.req.raw));

if (process.env.NODE_ENV === "production") {
  app.use("/*", serveStatic({ root: "dist/client" }));
}

const port = Number(process.env.PORT ?? 3000);
// eslint-disable-next-line no-console
console.log(`Server running on http://localhost:${port}`);

export default {
  port,
  fetch: app.fetch,
};
