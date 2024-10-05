import mysql, { PoolOptions, Pool, RowDataPacket } from "mysql2/promise";
import CustomError from "./Error";

interface IConnectionQueryResult extends RowDataPacket {
  result: number;
}

class Database {
  private host: string;
  private user: string;
  private password: string;
  database: string;
  pool: Pool;
  constructor(host: string, user: string, password: string, database: string) {
    this.host = host;
    this.user = user;
    this.password = password;
    this.database = database;
    this.pool = mysql.createPool({
      host: this.host,
      user: this.user,
      password: this.password,
      database: this.database,
    });
    this.basicQuery()
      .then(() => {
        console.log("Connection established");
      })
      .catch((err) => {
        new CustomError({ message: err.message, statusCode: 500 });
      });
  }
  private basicQuery = async () => {
    const [rows, fields] = await this.pool.query<IConnectionQueryResult[]>(
      "SELECT 1+1 as result"
    );
    console.log(rows);
    if (rows[0].result === 2) {
      console.log("Connection established");
    }
  };
}
export const reader_conn = new Database(
  process.env.READER_DATABASE_HOST!,
  process.env.READER_DATABASE_USER!,
  process.env.READER_DATABASE_PASSWORD!,
  process.env.READER_DATABASE_NAME!
);

export const writer_conn = new Database(
  process.env.WRITER_DATABASE_HOST!,
  process.env.WRITER_DATABASE_USER!,
  process.env.WRITER_DATABASE_PASSWORD!,
  process.env.WRITER_DATABASE_NAME!
);
