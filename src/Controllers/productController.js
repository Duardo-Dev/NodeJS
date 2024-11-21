const productModel = require('../models/productsModel.js');

// enabled name slug use_in_menu stock description price price_with_discount
const createNewProduct = async (req, res) => {
    const { name, slug, use_in_menu, description, price, price_with_discount } = req.body;

    try {
        const newProduct = await productModel.create({
            name: name,
            slug: slug,
            use_in_menu: use_in_menu,
            description: description,
            price: price,
            price_with_discount: price_with_discount
        });

        res.status(201).send({
            message: `Produto criado com sucesso! ID: ${newProduct.id}`
        });

    } catch (error) {
        res.status(400).send({
            message: `Erro ao criar o produto: ${error.message}`
        });
    }
};

// const getAllProduct = async (req, res) => {
//     try {
//         const product = await productModel.findAll();
//         res.status(200).send({ product });

//     } catch (error) {
//         res.status(404).send({
//             message: `Erro ao buscar produtos: ${error.message}`
//         });
//     }
// };

const getAllProduct = async (req, res) => {
    try {
        // Obtém o parâmetro "limit" da query string, ou define o valor padrão como 12
        const limit = parseInt(req.query.limit) || 12;

        // Se o valor de "limit" for -1, busca todos os produtos
        const options = limit === -1 ? {} : { limit };

        // Busca os produtos com base na opção definida
        const products = await productModel.findAll(options);

        res.status(200).send({ products });
    } catch (error) {
        res.status(404).send({
            message: `Erro ao buscar produtos: ${error.message}`
        });
    }
};





const updateProductById = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const exist = await productModel.findByPk(id);

        if (exist) {
            await productModel.update(
                { ...req.body },
                { where: { id: id } }
            );
            res.status(200).send({
                message: `Produto com ID ${id} atualizado com sucesso`
            });
        } else {
            res.status(404).send({
                message: `Não foi possível achar o produto com ID: ${id}`
            });
        }

    } catch (error) {
        res.status(500).send({
            message: `Erro ao atualizar o produto com ID: ${id}, ${error.message}`
        });
    }
};

const deleteProductById = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const produc = await productModel.findByPk(id);

        if (produc) {
            await productModel.destroy({
                where: { id: id }
            });

            res.status(200).send({
                message: `Produto de ID ${id} foi deletado com sucesso!`
            });

        } else {
            res.status(404).send({
                message: `Não foi possível achar o produto com ID: ${id}`
            });
        }

    } catch (error) {
        res.status(500).send({
            message: `Erro ao deletar o produto com ID: ${id}, ${error.message}`
        });
    }
};

module.exports = {
    createNewProduct,
    getAllProduct,
    updateProductById,
    deleteProductById
};















































