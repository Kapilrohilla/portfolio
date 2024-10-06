import { writer_conn } from "@/lib/database";

const create_static_content = async (payload: ICreateStaticContent) => {
  const output = await writer_conn.pool.query(
    `INSERT INTO static_content (key, value) VALUES ($1, $2)`,
    [payload.key, payload.value]
  );
  return output;
};

const get_static_content = async () => {
  const output = await writer_conn.pool.query(`SELECT * FROM static_content`);
  return output;
};

const get_static_content_by_key = async (key: string) => {
  const output = await writer_conn.pool.query(
    `SELECT * FROM static_content WHERE key = $1`,
    [key]
  );
  return output;
};

const update_static_content = async (payload: ICreateStaticContent) => {
  const output = await writer_conn.pool.query(
    `UPDATE static_content SET value = $2 WHERE key = $1`,
    [payload.key, payload.value]
  );
  return output;
};

interface ICreateStaticContent {
  key: string;
  value: string;
}

const static_content_repository = {
  get_static_content,
  get_static_content_by_key,
  create_static_content,
  update_static_content,
};
export default static_content_repository;
