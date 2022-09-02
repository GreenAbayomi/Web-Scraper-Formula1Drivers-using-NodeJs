import { driversModel } from '../models/f1_drivers.model.js'

import * as cheerio from 'cheerio'
import fetch from 'node-fetch'


export const getFormulaOneDrivers = async(req, res, next)=>{
    try {
        
        
        const res = await fetch('https://www.formula1.com/en/drivers.html')
        const body = await res.text()
        const $ = cheerio.load(body)


        $('.listing-items--wrapper > .row > .col-12').map( async (index, el)=>{
        const rank = $(el).find('.rank').text()
        const points = $(el).find('.points > .f1-wide--s').text()
        const firstName = $(el).find('.listing-item--name span:first').text()
        const lastName = $(el).find('.listing-item--name span:last').text()
        const team = $(el).find('.listing-item--team').text()
        const photo = $(el).find('.listing-item--photo img').attr('data-src')       
        
        await driversModel.create({
            firstName,
            lastName,
            photo,
            rank,
            points,
            team
        })
    
    })

    } catch (error) {
       console.log(error)
    }
}

