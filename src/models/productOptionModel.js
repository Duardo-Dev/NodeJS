const connection = require('../config/database/connection');
const { DataTypes } = require('sequelize');
const productsModel = require('./productsModel');


let productOptionModel = connection.define('productOptions',{
    product_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
            model : productsModel,
            key: 'id'
        }
    },
    title:{
        type: DataTypes.STRING(150),
        allowNull: false
    },
    shape:{
        type: DataTypes.ENUM('square', 'circle'),
        defaultValue: 'square',
        allowNull: true
    },
    radius:{
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: true
    },
    type:{
        type: DataTypes.ENUM('text', 'color '),
        allowNull: true,
        defaultValue: 'text'
    },
    values:{
        type: DataTypes.STRING(150),
        allowNull: false
    }
})

module.exports = productOptionModel;