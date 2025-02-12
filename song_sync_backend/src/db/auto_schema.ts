import fs from "fs";
import { PGPool } from "./pg_pool";
import format from "pg-format";

export class AutoSchema {
  public static async runSchemaScript(pool: PGPool, scriptPath: string) {
    let scriptNames = [];
    let scriptSQL = "";
    const client = await pool.connect();

    try {
      scriptNames = fs.readdirSync(scriptPath);

      scriptNames.forEach(async (scriptName) => {
        console.log(scriptName);
        scriptSQL = fs.readFileSync(scriptPath + "/" + scriptName, "utf8");
        await client.query(scriptSQL);
        console.log(`[sql]: ${scriptSQL}`);
      });
    } catch (error) {
      throw error;
    } finally {
      client.release();
    }
  }

  public static async seedDB(pool: PGPool, jsonPath: string) {
    const client = await pool.connect();
    try {
      const rawData = fs.readFileSync(jsonPath, "utf-8");
      const jsonData = JSON.parse(rawData);

      const values = Object.keys(jsonData.id).map((key) => [
        jsonData.id[key],
        jsonData.title[key],
        jsonData.danceability[key],
        jsonData.energy[key],
        jsonData.mode[key],
        jsonData.acousticness[key],
        jsonData.tempo[key],
        jsonData.duration_ms[key],
        jsonData.num_sections[key],
        jsonData.num_segments[key],
      ]);

      if (values.length === 0) {
        console.log("No data to insert.");
        return;
      }

      const query = format(
        "INSERT INTO songs (id, title, danceability, energy, mode, acousticness, tempo, duration_ms, num_sections, num_segments) VALUES %L;",
        values
      );

      await client.query(query);
    } catch (error) {
      throw error;
    } finally {
      client.release();
    }
  }
}
