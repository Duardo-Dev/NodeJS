const users = require('../models/usersModels')
const jwt = require('jsonwebtoken')
const {jwtSecret} = require('../config/dotenvConfig')
const bcrypt = require('bcrypt')


const loginAuth = async (req, res) => {
  try{
    const {email, password} = req.body;
    const user = await users.findOne({
      where: {email}
    })  
    
    const userPasword = user? user.password: ''
    const hasValid = await bcrypt.compare(password, userPasword)
    
    if(hasValid){
      const token = jwt.sign({id: user.id, nome : user.name}, jwtSecret, {expiresIn: '3h'});
      res.send({
        sucess : true,
        token : token,
        message : 'login realizado com sucesso'
      })
    }else{
      res.send({
        sucess : true,
        token : '',
        message : 'erro ao tentar fazer login'
      })
    }
  }catch(error){
    res.send(`deu erro ${error}`)
  }
}

// router.post('/login', (req, res) => {
//   const email = req.body.email;
//   const senha = req.body.senha;

//   const emailUser = 'eduardo@lopes.com.br'
//   const senhaUser = '12345'
// })


module.exports = {loginAuth}
