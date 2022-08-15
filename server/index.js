import * as dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

import productsRouter from '@/server/routes/products.routes.js'

const PORT = process.env.PORT || 5000
const app = express()

app.use('/api', productsRouter)

app.get('/', (request, response) => {
  response.send('hello, world!')
})

const start = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`)
    })
  } catch (error) {
    console.log(error)
  }
}

start()
