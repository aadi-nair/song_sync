import pg from "pg";

export class PGPool {

  pool: pg.Pool;
  private static instance: PGPool;

  
  constructor(dbConfig: pg.PoolConfig) {

    this.pool = new pg.Pool(dbConfig);

    this.pool.on("error", function (err: Error, _client: any) {
      console.log(`Idle-Client Error:\n${err.message}\n${err.stack}`);
    });
  }

  async connect(): Promise<pg.PoolClient> {
    const client = await this.pool.connect();
    return client;
  }

  static getInstance(dbConfig?: pg.PoolConfig): PGPool {
    if (!PGPool.instance) {
      if (!dbConfig) {
        throw new Error("Missing dbConfig");
      }
      PGPool.instance = new PGPool(dbConfig);
    }
    return PGPool.instance;
  }

  getClient() {
    return this.pool;
  }
}
