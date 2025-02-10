import pg from "pg";

export class PGPool {
  pool: pg.Pool;
  constructor(dbConfig: pg.PoolConfig) {
    // console.log(dbConfig);
    this.pool = new pg.Pool(dbConfig);

    this.pool.on("error", function (err: Error, _client: any) {
      console.log(`Idle-Client Error:\n${err.message}\n${err.stack}`);
    });
  }

  async connect(): Promise<pg.PoolClient> {
    const client = await this.pool.connect();
    return client;
  }

  getClient() {
    return this.pool;
  }
}
