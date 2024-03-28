const express = require('express')
const router = express.Router()

const { select, insert, update, remove } = require('../services/db/sql/sql_operations')


router.post('/create', async (req, res) => {
    let body = req.body
    body.tableName = "members"
    let result = await insert(body)
    res.status(200).send(result)
})

router.post('/read', async (req, res) => {
    let result = await select({ colunmsNames: req.body.colunmsNames, tableName: "members", conditions: req.body.conditions })
    res.status(200).send(result)
})

router.post('/update', async (req, res) => {
    // console.log({body:req.body.value});
    req.body.tableName = "members"
    let result = await update(req.body)
    res.status(200).send(result)
})

router.get('/delete/:id',async(req,res)=>{
    let member = await select({colunmsNames:["*"],tableName:"members",conditions:[`id=${req.params.id}`]})
    let object = {
        colunmsNames:Object.keys(member[0]),
        values:Object.values(member[0]),
        tableName:"deletedMembers"
    }
    await remove({tableName:"members",condition:`memberid=${member[0][memberid]}`})
    let result = await insert(object)
    res.status(200).send(result)
})

module.exports = router