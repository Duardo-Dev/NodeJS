const { DataTypes } = require('sequelize');
const connection = require('../config/database/connection'); // Conexão com o banco de dados
const productModel = require('./productsModel'); // Importação correta do productModel

// Definindo o modelo da imagem
let imageModel = connection.define('products_imgs', {
    product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: productModel, // Certifique-se de usar o modelo correto aqui
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

// Verifique se a associação está sendo feita corretamente
// imageModel.belongsTo(productModel, { foreignKey: 'product_id', as: 'images' });

module.exports = imageModel;
