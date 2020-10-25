const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "test",
  password: "Witty.,Stove2890",
  port: 5432
});

module.exports = pool;
