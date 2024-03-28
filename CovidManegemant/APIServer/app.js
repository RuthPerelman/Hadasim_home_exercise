const express = require('express')
const cors = require('cors')

const app = express()

const membersRouter = require('./routers/members_router')
const vaccinationsRouter = require('./routers/vaccinations_router')
const covidRouter = require('./routers/covid_router')

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).send('Hello server')
})

app.use('/members', membersRouter)
app.use('/vaccinations', vaccinationsRouter)
app.use('/covid', covidRouter)

app.get('/*', (req, res) => {
    res.status(404).send('Not Found')
})

module.exports = { app }
