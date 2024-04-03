import pg from 'pg';
const client = new pg.Client(process.env.DATABASE_URL || 'postgres://localhost/mythical_munchies_db');

export default client;