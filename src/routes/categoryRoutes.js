const express = require('express')
const router = express.Router()
const categoryControllers = require('../Controllers/categoryController');
const categoryMiddlewares = require('../middlewares/categoryMiddleware');


router.post('/category-create', categoryMiddlewares.middlewareCreateNewCategory , categoryControllers.createNewCategory)

router.get('/category-list', categoryControllers.getAllCategory)

router.put('/category-update/:id', categoryMiddlewares.middlewareUpdateCategoryById, categoryControllers.updateCategoryById)

router.delete('/category-delete/:id', categoryMiddlewares.middlewareDeleteCategoryById , categoryControllers.deleteCategoryById)




module.exports = router











