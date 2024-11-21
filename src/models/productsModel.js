    const { DataTypes } = require('sequelize');
    const connection = require('../config/database/connection'); // Conexão com o banco de dados

    // Definindo o modelo do produto
    let productModel = connection.define('products', {
        enabled: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: false
        },
        name: {
            type: DataTypes.STRING(150),
            allowNull: false
        },
        slug: {
            type: DataTypes.STRING(150),
            allowNull: false
        },
        user_in_menu: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: true
        },
        stock: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            allowNull: true
        },
        description: {
            type: DataTypes.STRING(150),
            allowNull: true
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        price_with_discount: {
            type: DataTypes.FLOAT,
            allowNull: false
        }
    });

    // Verificando a associação entre produtos e imagens
    // productModel.hasMany(require('./imageModels'), { foreignKey: 'product_id', as: 'images' });

    module.exports = productModel;
