const express = require('express')
const router = express.Router()

router.post('/create', async (req, res) => {
    req.body.tableName = "covid"
    let result = await insert(body)
    res.status(200).send(result)
})

router.post('/', express.urlencoded({ extended: true }), (req, res) => {
    res.status(200).send('V')
})

module.exports = router                                         
