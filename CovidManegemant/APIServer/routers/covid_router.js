const express = require('express')
const router = express.Router()
const { insert, selectWithJoin, select,update } = require('../services/db/sql/sql_operations')

router.post('/create', async (req, res) => {
    req.body.tableName = "covid"
    let result = await insert(body)
    res.status(200).send(result)
})

router.post('/read/', async (req, res) => {
    let result = await select({ colunmsNames: req.body.colunmsNames, tableName: "covid", conditions: [`memberid=${req.body.id}`] })
    // console.log({result});
    res.status(200).send(result)
})

router.post('/update', async (req, res) => {
    // console.log({body:req.body.value});
    req.body.tableName = "covid"
    let result = await update(req.body)
    res.status(200).send(result)
})

module.exports = router                                         
