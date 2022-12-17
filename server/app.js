const express = require('express')
const path = require('path')
const app = express()
const PORT = process.env.PORT || 3500

app.use('/', require(path.join(__dirname, 'routes', 'root')))

app.listen(PORT, () => {
    console.log(`backend listening on port ${PORT}`)
})