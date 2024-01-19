const Pool = require("pg").Pool;

const pool = new Pool({
    user: process.env.PSQL_USER,
    password: process.env.PSQL_PWD,
    host: process.env.PSQL_HOST,
    port: process.env.PSQL_PORT,
    database: process.env.PSQL_DATABASE
});

//if facing errors with connection, console.log the values to debug

module.exports = pool;