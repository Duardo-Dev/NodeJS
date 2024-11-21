const dotenv = require('dotenv');
const { Sequelize } = require('sequelize');

// Carrega as variáveis do .env
dotenv.config();


    
// Criação da conexão com o banco
const connection = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: process.env.DB_DRIVER,
        dialectOptions: {
            ssl: {
                require: true, // Força o uso de SSL
                rejectUnauthorized: false // Permite conexão sem certificado
            }
        },
        logging: false // Desativa logs do SQL no console
    }
);

module.exports = connection;
