import * as dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

const PORT = process.env.PORT || 5000
const app = express()

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
