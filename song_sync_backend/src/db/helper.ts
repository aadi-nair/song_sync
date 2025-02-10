import { PGPool } from "./pg_pool";
import { dbConfig } from "../config";

export class Helper {
  public static pool(): PGPool {
    return new PGPool(dbConfig);
  }
}
