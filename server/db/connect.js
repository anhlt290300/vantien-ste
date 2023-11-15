import mysql from "mysql2";

const db = mysql.createConnection({
  host: "103.221.221.44",
  user: "frptajer_sang",
  password: "m9ja,tNv=SDy",
  database: "frptajer_vantienste_db",
});

export { db };
