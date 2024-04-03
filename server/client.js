const pg = require('pg');
const client = new pg.Client(process.env.DATABASE_URL || 'postgres://localhost/mythical_munchies');

module.exports = { client }