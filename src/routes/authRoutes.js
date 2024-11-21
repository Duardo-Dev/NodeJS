const express = require('express')
const router = express.Router()
const authControllers = require('../Controllers/authController')

//rota login
router.post('/login', authControllers.loginAuth);


module.exports = router
  

  
  
