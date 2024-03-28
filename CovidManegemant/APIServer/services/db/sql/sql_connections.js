require('dotenv').config()

const sql = require('mssql')

let pool

const sqlConfig = {
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DB_NAM,
    server: "BROYNER\\SQLEXPRESS",
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    },
    options: {
        encrypt: true, // for azure
        trustServerCertificate: true // change to true for local dev / self-signed certs
    }
}

const connect = async () => {
    try {
        // make sure that any items are correctly URL encoded in the connection string
        pool = await sql.connect(sqlConfig)
        console.log(pool.connected);
    } catch (err) {
        console.log(err);
        // ... error checks
    }
}

const getPool = () => pool

module.exports = { connect, getPool }
