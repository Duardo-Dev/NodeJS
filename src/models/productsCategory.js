const connection = require('../config/database/connection');
const { DataTypes } = require('sequelize');
const productsModel = require('./productsModel');
const categoryModel = require('./categoryModel');


let productsCategory = connection.define('productsCategory',{
    product_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
            model : productsModel,
            key: 'id'
        }
    },
    category_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
            model : categoryModel,
            key: 'id'
        }
    }
})

module.exports = productsCategory;





























