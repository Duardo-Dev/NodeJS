const connection = require('../config/database/connection');
const { DataTypes } = require('sequelize');


let categoryModel = connection.define('categories',{
    name:{
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    slug:{
        type: DataTypes.STRING(150),
        allowNull: false
    },
    use_in_menu:{
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false
    }
})

module.exports = categoryModel;


















