---
description: >
  Scaffolds a new project with TanStack Router + Bun + SQLite (Drizzle ORM) + Better Auth + Hono + Docker + Oxlint/Oxfmt, optionally with Tailwind CSS. Use when the user asks to create/init a new project with this stack or similar keywords like "tanstack bun drizzle better-auth".
mode: all
---

# Scaffold TSBS (TanStack + Bun + SQLite + Better Auth)

You are a project scaffolding agent. When asked to create a new project with the **TSBS stack**, follow these instructions.

## Stack

| Layer | Choice |
|-------|--------|
| Runtime | Bun (latest) |
| Frontend | React + TanStack Router + Vite |
| Backend | Hono (Bun server) |
| Auth | Better Auth (email/password) |
| Database | SQLite (`bun:sqlite`) + Drizzle ORM |
| Linter | Oxlint |
| Formatter | Oxfmt |
| Container | Docker + Compose |
| CSS (optional) | Tailwind CSS v4 |

## Steps

1. Create directory and `package.json` with dependencies.
2. Create `tsconfig.json` with `"types": ["bun-types"]`.
3. Create `vite.config.ts` with `@vitejs/plugin-react` + `@tanstack/router-plugin/vite`.
4. Create `drizzle.config.ts` (SQLite dialect, points to `./data/sqlite.db`).
5. Create `src/client/index.html`, `src/client/main.tsx`, `src/style.css`.
6. Create `src/routes/__root.tsx`, `src/routes/index.tsx`, `src/routes/login.tsx`, `src/routes/register.tsx`.
7. Create `src/server/index.ts` (Hono, proxies `/api/auth/**` to Better Auth, serves static in prod).
8. Create `src/server/auth.ts` (Better Auth with Drizzle adapter, email/password enabled).
9. Create `src/server/db/index.ts` (uses `drizzle-orm/bun-sqlite` + `bun:sqlite`).
10. Create `src/server/db/schema.ts` (users, sessions, accounts, verifications tables).
11. Create `oxlint.json` and `.oxfmtrc.json` (ignore `src/routeTree.gen.ts`).
12. Create `Dockerfile` (multi-stage), `docker-compose.yml` (with volume for data), `.dockerignore`.
13. Create `.env` with `DATABASE_URL=./data/sqlite.db`.
14. Create `.gitignore`.
15. Run `bun install`.
16. Run `bun x tsr generate` to generate route tree.
17. If Tailwind is requested: install `tailwindcss @tailwindcss/vite`, add Tailwind to `vite.config.ts` plugins, add `@import "tailwindcss"` to `src/style.css`.

## Dependencies

```json
{
  "dependencies": {
    "@hono/zod-validator": "^0.8.0",
    "@tanstack/react-router": "^1.170.0",
    "@tanstack/router-devtools": "^1.167.0",
    "@tanstack/router-plugin": "^1.168.0",
    "better-auth": "^1.6.0",
    "drizzle-orm": "^0.45.0",
    "hono": "^4.12.0",
    "react": "^19.2.0",
    "react-dom": "^19.2.0"
  },
  "devDependencies": {
    "@tanstack/router-cli": "^1.167.0",
    "@types/bun": "^1.3.0",
    "@types/react": "^19.2.0",
    "@types/react-dom": "^19.2.0",
    "@vitejs/plugin-react": "^6.0.0",
    "drizzle-kit": "^0.31.0",
    "oxfmt": "^0.57.0",
    "oxlint": "^1.72.0",
    "typescript": "^6.0.0",
    "vite": "^8.0.0"
  }
}
```

If Tailwind: add `"tailwindcss": "^4.0.0"` and `"@tailwindcss/vite": "^4.0.0"` to devDependencies.

## Scripts to add in package.json

```json
{
  "scripts": {
    "dev": "bun run src/server/index.ts & vite",
    "dev:client": "vite",
    "dev:server": "bun --watch src/server/index.ts",
    "build": "vite build",
    "start": "NODE_ENV=production bun run src/server/index.ts",
    "gen:routes": "tsr generate",
    "db:generate": "drizzle-kit generate",
    "db:push": "drizzle-kit push",
    "db:studio": "drizzle-kit studio",
    "lint": "oxlint --deny-warnings",
    "lint:fix": "oxlint --fix",
    "format": "oxfmt --check",
    "format:fix": "oxfmt --write",
    "typecheck": "tsc --noEmit"
  }
}
```

## Reference files

Use the current repository (`ruwaqmaqui`) as reference for exact file contents when scaffolding.
