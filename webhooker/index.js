const express = require("express")
const ip = require('ip')
const crypto = require('crypto');
const bodyParser = require("body-parser")

const app = express()
const HOST = ip.address()
const PORT = process.env.PORT ?? 4000

app.use((req, res, next) => {
  var data = ''
  req.on('data', (chunk) => { data += chunk })
  req.on('end', () => {
     req.rawBody = data
     next()
  })
})

app.use(bodyParser.json())

app.all('/', (req, res) => {
  res.status(200).send('Webhooker is running...\n')
})

app.post("/deploy", (req, res) => {
  const expectedSignature = req.headers['x-hub-signature'];
  const calculatedSignature = 'sha1=' + crypto.createHmac('sha1', process.env.DEPLOY_WEBHOOK_SECRET).update(req.rawBody, 'utf-8').digest('hex');
  console.log(expectedSignature, calculatedSignature)
  if (expectedSignature !== calculatedSignature) {
    console.log('Invalid signature. Aborting...')
    res.status(403).send()
  } else {
    console.log('Valid signature. Going to the next steps...')
    res.status(200).send()
  }
})

app.listen(PORT, HOST, () => console.log(`Server running at http://${HOST}:${PORT}`))
