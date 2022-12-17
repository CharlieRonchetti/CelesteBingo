const express = require('express')
const router = express.Router()
const path = require('path')

router.get('/', (req, res) => {
    res.send({express: 'Express backend connected to react'});
});

module.exports = router