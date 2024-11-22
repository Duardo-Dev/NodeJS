const Product = require('../models/productsModel'); // Modelo Product
const ProductImg = require('../models/imageModels'); // Modelo ProductImg


const createImage = async (req, res) => {
    const { product_id, path, enabled } = req.body;

    try {
        // Verificar se o produto associado existe
        const productExists = await productModel.findByPk(product_id);
        if (!productExists) {
            return res.status(404).send({ error: 'Produto não encontrado.' });
        }

        // Criar o registro da imagem
        const newImage = await imageModel.create({
            product_id,
            path,
            enabled: enabled !== undefined ? enabled : true,
        });

        res.status(201).send({ message: 'Imagem criada com sucesso!', data: newImage });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Erro ao criar a imagem.' });
    }
};



    const getAllProducts = async (req, res) => {
        try {
            // Buscar todos os produtos com suas imagens associadas
            const products = await Product.findAll({
                attributes: ['id', 'name', 'slug', 'description', 'price', 'price_with_discount'],
                include: [{
                    model: ProductImg,
                    as: 'images',  // Usando o alias que definimos na associação
                    attributes: ['id', 'path','product_id'],
                }],
            });
    
            if (products.length === 0) {
                return res.status(404).send({ error: 'Nenhum produto encontrado.' });
            }
    
            res.status(200).send({ data: products });
        } catch (error) {
            console.error(error);
            res.status(500).send({ error: 'Erro ao buscar produtos.' });
        }
    };
    const getProductById = async (req, res) => {
        try {
            // Obter o ID do produto a partir dos parâmetros da requisição
            const { id } = req.params;
    
            // Buscar o produto pelo ID, incluindo as imagens associadas
            const product = await Product.findOne({
                where: { id },
                attributes: ['id', 'name', 'slug', 'description', 'price', 'price_with_discount'],
                include: [{
                    model: ProductImg,
                    as: 'images', // Usando o alias definido na associação
                    attributes: ['id', 'path', 'product_id'],
                }],
            });
    
            // Verificar se o produto foi encontrado
            if (!product) {
                return res.status(404).send({ error: 'Produto não encontrado.' });
            }
    
            // Enviar o produto encontrado na resposta
            res.status(200).send({ data: product });
        } catch (error) {
            console.error(error);
            res.status(500).send({ error: 'Erro ao buscar o produto.' });
        }
    };
   
    


module.exports = { createImage, getAllProducts ,getProductById};
