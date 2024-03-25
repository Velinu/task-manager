import { Router } from 'express'

const routes = Router()
routes.get('/', (req,res) =>{
    res.send('o pedro é viado')
})

export {routes}