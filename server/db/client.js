const { Client, DatabaseError } = require("pg");
const DATABASE_URL =
  process.env.DATABASE_URL || "postgres://localhost/mythical_munchies_db";
const client = new Client({
  connectionString: DATABASE_URL,
  ssl:
    process.env.NODE_ENV === "production"
      ? { rejectUnauthorized: false }
      : undefined,
});

module.exports = client;
