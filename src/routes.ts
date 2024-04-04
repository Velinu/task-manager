import { Router } from 'express'
import taskController from './controllers/taskController'

const routes = Router()
routes.get('/task', taskController.getAll)

export {routes}