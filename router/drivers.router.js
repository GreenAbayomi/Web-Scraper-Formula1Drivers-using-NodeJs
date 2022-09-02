import express from 'express'
export const router = express.Router()
import { getFormulaOneDrivers } from '../controllers/drivers.controllers.js'


router.get('/alldrivers', getFormulaOneDrivers)