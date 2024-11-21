const express = require('express')
const router = express.Router()
const usersControllers = require('../Controllers/usersController')
const usersMiddlewares = require('../middlewares/userMiddleware');

//rota login

router.post('/api/usuarios',  usersControllers.createNewUser)

router.get('/user-list', usersControllers.getAllUsers);

router.put('/user-update/:id', usersMiddlewares.middlewareUpdateUserById  , usersControllers.updateUserById);

router.delete('user-delete/:id', usersMiddlewares.middlewareDeleteUserById, usersControllers.deleteUserById)

module.exports = router
  

  
  
