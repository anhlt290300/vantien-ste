import mysql from "mysql2";

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "0918806450",
  database: "vantien-ste",
});

export { db };
