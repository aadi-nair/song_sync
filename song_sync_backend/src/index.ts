import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { PGPool, AutoSchema, Helper } from "./db";
import path from "path";

import { songsRouter } from "./routes";

dotenv.config();

const app: Express = express();
app.use(cors<Request>());

const port = process.env.PORT || 5000;
const pool: PGPool = Helper.pool();


app.use("/api/songs", songsRouter);

app.get("/api/seed", async (req: Request, res: Response) => {
  try {
    let migrationsPath = "../database/seeders/playlist.json";
    const scriptsPath = path.join(__dirname, migrationsPath);
    await AutoSchema.seedDB(pool, scriptsPath);
    res.json({ message: "Successfully seeded database" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Seeding failed" });
  }
 
});

app.listen(port, async () => {
  try {
    await pool.connect();

    let migrationsPath = "../database/migrations/";
    const scriptsPath = path.join(__dirname, migrationsPath);
    await AutoSchema.runSchemaScript(pool, scriptsPath);

    console.log(`[server]: Server is running at http://localhost:${port}`);
  } catch (error) {
    console.log(error);
  }
});
