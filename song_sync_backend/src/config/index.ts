require("dotenv").config();
import path from "path";

export interface dbClient {
  user: string;
  password: string | undefined;
  database: string;
  host: string;
  port: number;
  ssl: boolean;
  max: number;
  idleTimeoutMillis: number;
}

export const dbConfig: dbClient = {
  user: process.env.DB_USER ?? "",
  password: process.env.DB_PASSWORD ?? "",
  database: process.env.DB_NAME ?? "",
  host: process.env.DB_HOST ?? "",
  port: 5432,
  ssl: false,
  max: 20,
  idleTimeoutMillis: 10000,
};


