const connection = require('../config/database/connection');
const { DataTypes } = require('sequelize')

let userModel = connection.define('users', {
    first_name: {
        type: DataTypes.STRING(50), //equivalente ao VARChAR(50)
        allowNull: false //PERMITIR QUE SEJA NULO? EQUIVALENTE AO NOTNULL
    },
    surname: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    email: {
        type : DataTypes.STRING(255),
        allowNull: false
    },
    password:{
        type : DataTypes.STRING(30),
        allowNull: false
    }
})


module.exports = userModel;











