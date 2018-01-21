const pg = require('pg');

const config = {
    database: 'amys_gallery',
    host: 'localhost',
    port: 5432,
    idleTimeOutMillis: 5000,
    max: 10
}

const pool = new pg.Pool(config);

module.exports = pool;