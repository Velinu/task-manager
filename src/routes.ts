import { Router } from 'express'
import categoryController from './controller/category.controller'
import userController from './controller/user.controller'

const routes = Router()
/* routes.get('/task', taskController.getAll)
routes.get('/task/:id', taskController.getById)
routes.get('/task/category/:category', taskController.getAllByCategory)
routes.post('/task', taskController.post)
routes.patch('/task/:id', taskController.patch)
routes.delete('/task/:id', taskController.delete) */

routes.get('/user', userController.getAll)
routes.get('/user/:id', userController.getById)
routes.post('/user', userController.postOne)
routes.patch('/user/:id', userController.patchOne)
routes.delete('/user/:id', userController.deleteOne)

routes.get('/category', categoryController.getAll)
routes.get('/category/:id', categoryController.getById)
routes.post('/category', categoryController.postOne)
routes.patch('/category/:id', categoryController.patchOne)
routes.delete('/category/:id', categoryController.deleteOne)

export { routes }