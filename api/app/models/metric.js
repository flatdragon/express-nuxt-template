const mongoose = require('mongoose')

const MetricSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  value: {
    type: String,
    required: true,
  },
}, {
  versionKey: false,
})


module.exports = mongoose.model('Metric', MetricSchema)
