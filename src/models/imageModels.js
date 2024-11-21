const { DataTypes } = require('sequelize');
const connection = require('../config/database/connection'); // Conexão com o banco de dados
const productModel = require('./productsModel'); // Importando o modelo Product

// Definindo o modelo de imagem do produto
let imageModel = connection.define('products_imgs', {
    product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: productModel, // Relacionando com o modelo Product
            key: 'id'
        }
    },
    enabled: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: true
    },
    path: {
        type: DataTypes.STRING(150),
        allowNull: false
    }
});

// Definindo a associação com o modelo de produto (Imagem pertence a um produto)
// imageModel.belongsTo(productModel, { foreignKey: 'product_id', as: 'product' });

module.exports = imageModel;
