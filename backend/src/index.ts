import express from 'express'
import cors from 'cors'
import { connect } from './database/connect'
import { routes } from './routes'

const app = express()

app.use(express.json())
app.use(cors())

connect()

app.use(routes)

app.listen(3333, () => {
  console.log('[SERVER] Running at http://localhost:3333')
})