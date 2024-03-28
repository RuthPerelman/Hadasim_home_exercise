require('dotenv').config()
const http = require('http')
const { app } = require('./app')

const SQLconnect = require('./services/db/sql/sql_connections').connect

const { HOST, PORT } = process.env


SQLconnect().then(async _ => {
    app.listen(PORT, HOST, () => {
        console.log(`http://${HOST}:${PORT}`)
    })
})

const server = http.createServer(app)
