import { Helper, PGPool } from "../db/";

export class SongsController {
  public static async getByTitle(title: string) {
    const pool: PGPool = Helper.pool();

    const client = await pool.connect();
    try {
      const result = await client.query(
        `SELECT * FROM songs WHERE title ILIKE $1`,
        [`%${title}%`]
      );
      return result.rows;
    } catch (error) {
      throw error;
    } finally {
      client.release();
    }
  }
}
