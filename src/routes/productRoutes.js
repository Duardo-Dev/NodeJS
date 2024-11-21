const express = require('express')
const router = express.Router()
const productControllers = require('../Controllers/productController')
const productMiddlewares = require('../middlewares/productMiddleware');


router.post('/product-create', productControllers.createNewProduct)

router.get('/product-list', productControllers.getAllProduct)

router.put('/product-update/:id', productMiddlewares.middlewareUpdateProduct, productControllers.updateProductById)

router.delete('/product-delete/:id', productMiddlewares.middlewareDeleteProduct, productControllers.deleteProductById)



module.exports = router













