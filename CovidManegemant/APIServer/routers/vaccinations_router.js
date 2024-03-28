const express = require('express')
const router = express.Router()

const { insert, select, update, remove } = require('../services/db/sql/sql_operations')

router.post('/create', async (req, res) => {
    req.body.tableName = "Vaccinations"
    let result = await insert(req.body)
    res.status(200).send(result)
})

router.post('/read', async (req, res) => {
    let result = await select({ colunmsNames: req.body.colunmsNames, tableName: "Vaccinations" })
    res.status(200).send(result)
})

router.post('/update', async (req, res) => {
    req.body.tableName = "Vaccinations"
    let result = await update(req.body)
    res.status(200).send(result)
})

router.delete('/delete/:name', async (req, res) => {
    let result = await remove({ tableName: "Vaccinations", condition: `name=${req.params.name}` })
    res.status(200).send(result)
})

module.exports = router
