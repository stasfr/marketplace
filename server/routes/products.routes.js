import { Router } from "express";
const productsRouter = new Router()
import ProductController from '../controller/products.controller.js'

productsRouter.post('/products', ProductController.createProduct)
productsRouter.get('/products', ProductController.getProducts)
productsRouter.get('/products/:id', ProductController.getOneProduct)
productsRouter.put('/products', ProductController.updateProduct)
productsRouter.delete('/products/:id', ProductController.deleteProduct)

export default productsRouter
