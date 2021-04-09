const request = require('supertest')
const app = require('../app')

describe('Test the root path', () => {
  test('It should response the GET method with 200 code', async () => {
    const response = await request(app).get('/')
    expect(response.statusCode).toBe(200)
  })

  test('It should response with text "Hello from Express!"', async () => {
    const response = await request(app).get('/')
    expect(response.text).toBe('Hello from Express!')
  })
})
