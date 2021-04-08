const ip = require('ip')
const http = require('http')
const crypto = require('crypto')
const express = require('express')
const bodyParser = require('body-parser')
const execute = require('./execute')

const app = express()

app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.status(200).send('Webhook is running...\n')
})

app.post('/', async (req, res) => {
  const timeZone = 'UTC'

  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: false,
    timeZone,
  }

  console.log(`\n---------- Incoming Webhook Call at ${(new Date()).toLocaleString('en', options)} (${timeZone}) ----------\n`)
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
    if (process.env.ENV === 'production') {
      console.log('Valid signature. Init project syncing...\n')
      try {
        const commandOutput = await execute('cd .. && bash sync.sh')

        console.log(commandOutput);
      } catch (error) {
        console.error(error)
      }
    } else {
      console.log('Valid signature. Finishing...\n')
    }
    res.status(200).send()
  }
})

const webhook = http.createServer(app)

const HOST = ip.address()
const PORT = process.env.PORT ?? 4000

webhook.listen(PORT, HOST, () => console.log(`Server running at http://${HOST}:${PORT}`))
