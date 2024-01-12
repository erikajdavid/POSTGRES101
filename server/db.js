require("dotenv").config();

const Pool = require("pg").Pool;

const pool = new Pool({
    user: process.env.PSQL_USER,
    password: process.env.PSQL_PWD,
    host: process.env.PSQL_HOST,
    port: process.env.PSQL_PORT,
    database: process.env.PSQL_DATABASE
});

//console to make sure the values are correct and to help debug

console.log("Connecting to PostgreSQL with the following details:");
console.log("User:", process.env.PSQL_USER);
console.log("Password:", process.env.PSQL_PWD);
console.log("Host:", process.env.PSQL_HOST);
console.log("Port:", process.env.PSQL_PORT);
console.log("Database:", process.env.PSQL_DATABASE);

module.exports = pool;