const mongoose = require('mongoose')

const uri = 'mongodb://mongo:27017'

mongoose.connection.on('error', () => {
  throw new Error(`Unable to connect to database: ${uri}`)
})

mongoose
  .connect(uri, {
    keepAlive: 1,
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`Connected to database: ${uri}`)
  })
