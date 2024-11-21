const app = require('./app')
const {port} = require('./config/dotenvConfig')


// SUBINDO O SERVIDOR NA PORTA 3000
app.listen(port, () => {
    console.log(`O servidor está rodando no link -> http://localhost:${port}`)
})



