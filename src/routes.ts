import { Router } from 'express'

const routes = Router()
routes.get('/task', taskController)

export {routes}