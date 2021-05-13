const express = require('express')
const bodyParser = require('body-parser')
const Metric = require('../models/metric')
const router = express.Router()

router.use(bodyParser.json())

router.get('/', (req, res) => {
  res.status(200).send('Hello from Express!')
})

router.get('/visits', async (req, res) => {
  const visits = (await Metric.findOne({ name: 'visits' }).lean()) ?? {
    value: 0,
  }

  await Metric.updateOne(
    { name: 'visits' },
    { value: ++visits.value },
    { upsert: true }
  ).exec()

  res.status(200).send(String(visits.value))
})

module.exports = router
