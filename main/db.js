const { Pool } = require('pg')
// const pool = new Pool({
//     user: 'Iam',
//     host: 'localhost',
//     database: 'opensky',
//     password: 'postgres',
//     port: 5432,
// });

const pool = new Pool({
    user: 'airtraffic_wi_admin',
    host: 'zgis226.geo.sbg.ac.at',
    database: 'w19_airtraffic_wi',
    password: 'airtra$$ic',
    port: 5432,
});

module.exports = pool