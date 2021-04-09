const http = require('http')
const ip = require('ip')
const app = require('./app')

const server = http.createServer(app)

const HOST = process.env.HOST ?? '0.0.0.0'
const PORT = process.env.PORT ?? 2000

const PRINTABLE_HOST = HOST === '0.0.0.0' ? ip.address() : HOST

server.listen(PORT, HOST, () =>
  console.log(`Server running at http://${PRINTABLE_HOST}:${PORT}`)
)
