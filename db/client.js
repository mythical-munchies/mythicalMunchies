const { Client } = require('pg')
const client = new Client(process.env.DATABASE_URL || 'postgres://localhost/mythical_munchies_db');

module.exports = client;