const productModel = require('../models/productsModel');


function middlewareCreateProduct(req, res, next){
    const {name, slug, user_in_menu, description, price, price_with_discount} = req.body
    try {
        if(!name || !slug || !user_in_menu || !description || !price || !price_with_discount){
           return res.status(400).send({
                message: '❌ Os dados fornecidos estão incompletos. Por favor insira todos os dados! \n Middleware'
            });
        }

        next();
    } catch (error) {
        res.status(500).send({
            message: `🔴 Erro inesperado ao tentar criar produto. Erro: ${error} \n Middleware`
        });
    }
}

async function middlewareUpdateProduct(req, res, next){
    const {name, slug, use_in_menu, description, price, price_with_discount} = req.body;
    const product = await productModel.findByPk(id)

    try {
        if(!name & !slug & !use_in_menu & !description & !price & !price_with_discount){
            return res.status(400).send({
                message : `🔴 Nenhum dado foi fornecido para a atualização do produto. \n Middleware`
            })
        }
        if(!product){
            return res.status(404).send({
                message: `🔴 Produto não encontrado! \n Middleware`
            })
        }
        next()
    } catch (error) {
        res.status(400).send({
            message: `🔴 Erro inesperado ao tentar atualizar produto. Erro: ${error} \n Middleware`
        });
    }

}


async function middlewareDeleteProduct(req, res, next){
    
    try {
        const id = parseInt(req.params.id);
        const product = await productModel.findByPk(id)
        
        if (isNaN(id) || id <= 0) {
            return res.status(400).send({
                message: '❌ O ID fornecido é inválido. Por favor, forneça um ID numérico válido!'
            });
        }
        if (!product) {
            return res.status(404).send({
                message: `🔴 Produto com ID: ${id} não encontrado! 😰`
            });
        }
        next()
    } catch (error) {
        res.status(404).send({
            message: `🔴 Erro inesperado ao tentar deletar produto. Erro: ${error} \n Middleware`
        })
    }


}


module.exports = {
    middlewareCreateProduct,
    middlewareUpdateProduct,
    middlewareDeleteProduct
}





























