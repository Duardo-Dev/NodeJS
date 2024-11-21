const imageModel = require('../models/imageModels')
const productModel = require('../models/productsModel')


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


const getalltenis = async(req,res) => {
   try{
         const tennis = await productModel.findAll({
            include: [{
                model: imageModel,
                as: 'images',  // Certifique-se de usar o alias correto ('images')
                where: { enabled: true },  // Filtra as imagens habilitadas
                attributes: ['path'],  // Pega apenas o caminho da imagem
            }]
        });
    
            // Verifica se há produtos
            if (!tennis || tennis.length === 0) {
                return res.status(404).send({ message: 'Nenhum tênis encontrado.' });
            }
    
            // Responde com os dados encontrados
            res.status(200).send({ tennis });
        } catch (error) {
            console.error(error);
            res.status(500).send({ error: 'Erro ao buscar os tênis.' });
        }
    };
    

module.exports = { createImage, getalltenis };
