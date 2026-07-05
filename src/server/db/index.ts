import { drizzle } from "drizzle-orm/bun-sqlite";
import { Database } from "bun:sqlite";
import * as schema from "./schema";

const DATABASE_URL = process.env.DATABASE_URL ?? "./data/sqlite.db";

const sqlite = new Database(DATABASE_URL);
sqlite.run("PRAGMA journal_mode = WAL");

export const db = drizzle(sqlite, { schema });
