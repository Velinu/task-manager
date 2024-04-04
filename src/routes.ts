import { Router } from 'express'
import taskController from './controllers/taskController'

const routes = Router()
routes.get('/task', taskController.getAll)
routes.get('/task/:id', taskController.getById)
routes.post('/task', taskController.post)
export {routes}