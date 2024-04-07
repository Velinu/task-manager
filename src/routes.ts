import { Router } from 'express'
import taskController from './controllers/taskController'
import userController from './controllers/userController'
import categoryController from './controllers/categoryController'

const routes = Router()
routes.get('/task', taskController.getAll)
routes.get('/task/:id', taskController.getById)
routes.post('/task', taskController.post)
routes.patch('/task/:id', taskController.patch)
routes.delete('/task/:id', taskController.delete)

routes.get('/user', userController.getAll)
routes.get('/user/:id', userController.getById)
routes.post('/user', userController.post)
routes.patch('/user/:id', userController.patch)
routes.delete('/user/:id', userController.delete)

routes.get('/category', categoryController.getAll)
routes.get('/category/:id', categoryController.getById)
routes.post('/category', categoryController.post)
routes.patch('/category/:id', categoryController.patch)
routes.delete('/category/:id', categoryController.delete)

export {routes}