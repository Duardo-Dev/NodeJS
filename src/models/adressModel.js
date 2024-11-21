const connection = require('../config/database/connection');
const { DataTypes } = require('sequelize');
const userModel = require('./usersModels');

let adressModel = connection.define('addresses', {
    user_id: {
        type: DataTypes.INTEGER, //equivalente ao VARChAR(50)
        allowNull: false, //PERMITIR QUE SEJA NULO? EQUIVALENTE AO NOTNULL
        references:{
            model: userModel,
            key: 'id'
        },
    },
    street: {
        type: DataTypes.STRING(150),
        allowNull: false
    },
    number: {
        type : DataTypes.STRING(5),
        allowNull: false
    }
})


module.exports = adressModel;











