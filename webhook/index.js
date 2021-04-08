const ip = require('ip')
const http = require('http')
const crypto = require('crypto')
const express = require('express')
const bodyParser = require('body-parser')
const { exec } = require('child_process')

const app = express()

app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.status(200).send('Webhook is running...\n')
})

app.post('/', (req, res) => {
  console.log(`\n---------- Incoming Webhook Call at ${Date.now()} ----------\n`)
  console.log('Verifiying signature...')

  const githubSignature = req.headers['x-hub-signature']
  const calculatedSignature = 'sha1=' + crypto.createHmac('sha1', process.env.WEBHOOK_SECRET).update(JSON.stringify(req.body), 'utf-8').digest('hex')

  console.log('-- X-Hub-Signature: ' + githubSignature)
  console.log('-- Calculated Signature: ' + calculatedSignature)
  console.log('\n')

  if (githubSignature !== calculatedSignature) {
    console.log('Invalid signature. Aborting...\n')
    res.status(403).send()
  } else {
    console.log('Valid signature. Init project syncing...\n')
    res.status(200).send()
  }
})

const webhook = http.createServer(app)

const HOST = ip.address()
const PORT = process.env.PORT ?? 4000

webhook.listen(PORT, HOST, () => console.log(`Server running at http://${HOST}:${PORT}`))
