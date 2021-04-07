const express = require("express")
const ip = require('ip')
const bodyParser = require("body-parser")

const app = express()
const HOST = ip.address()
const PORT = process.env.PORT ?? 4000

app.use(bodyParser.json())

app.all('/', (req, res) => {
  res.status(200).send('Webhooker is running...')
})

app.get("/deploy", (req, res) => {
  console.log(req.body)
  res.status(200).end()
})

app.listen(PORT, HOST, () => console.log(`Server running at http://${HOST}:${PORT}`))
