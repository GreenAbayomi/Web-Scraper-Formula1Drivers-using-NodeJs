import {} from 'dotenv/config'
import express from 'express'
import { errorHandler, notFound } from './middlewares/error.middleware.js'
import { router } from './router/drivers.router.js'


export const app = express()


app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(router)

app.all('*', notFound)
app.use(errorHandler)










