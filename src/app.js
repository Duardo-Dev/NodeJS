// IMPORTANDO O EXPRESS
const express = require('express')
// APP RECEBE O EXPRESS
const app = express()
const cors = require('cors');   
//APP RECEBE MIDDLEWARE PARA INTERPRETAR JSON
app.use(express.json())
// const animeRoutes = require('./routes/routes')
// const authRoutes = require('./routes/authRoutes')
app.use(cors({
    //Aqui você insere o número da porta que está rodando seu frontend
    origin: 'http://localhost:5173',
    // Precisa-se definir os Métodos que a porta de acesso terá permissão para utilizar.
    methods: ['GET', 'POST', 'PUT', 'DELETE']   
}));
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const imgsRoutes = require('./routes/productimgRoutes')


app.use(userRoutes)
app.use(productRoutes)
app.use(categoryRoutes)
app.use(imgsRoutes)




module.exports = app;