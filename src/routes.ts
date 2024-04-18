import { Router } from 'express'
import categoryController from './controller/category.controller'

const routes = Router()
/* routes.get('/task', taskController.getAll)
routes.get('/task/:id', taskController.getById)
routes.get('/task/category/:category', taskController.getAllByCategory)
routes.post('/task', taskController.post)
routes.patch('/task/:id', taskController.patch)
routes.delete('/task/:id', taskController.delete) */

/* routes.get('/user', userController.getAll)
routes.get('/user/:id', userController.getById)
routes.post('/user', userController.post)
routes.patch('/user/:id', userController.patch)
routes.delete('/user/:id', userController.delete) */

routes.get('/category', categoryController.getAll)
routes.get('/category/:id', categoryController.getById)
routes.post('/category', categoryController.postOne)
routes.patch('/category/:id', categoryController.patchOne)
routes.delete('/category/:id', categoryController.deleteOne)

export { routes }