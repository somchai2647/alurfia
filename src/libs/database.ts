import mysql from "mysql2/promise";

export const connect = async () => {
  return mysql.createPool({
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USERNAME || "root",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_DATABASE || "database",
  });
};

export const query = async (sql: string, values: any) => {
  const connection = await connect();
  const [rows] = await connection.execute(sql, values);
  return rows;
};
