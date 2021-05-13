const express = require('express')
require('./services')
const router = require('./routes')

const app = express()

app.use(router)

module.exports = app
