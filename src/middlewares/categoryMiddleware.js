const categoryModel = require('../models/categoryModel');

function middlewareCreateNewCategory(req, res, next){
    const {name, slug, use_in_menu} = req.body;
    try {
        if(!name || !slug || !use_in_menu ){
            return res.status(400).send({
                message: `❌ Os dados fornecidos estão incompletos. Por favor insira todos os dados! \n Middleware`
            });
        }
        next()
    } catch (error) {
        res.status(500).send({
            message: `🔴 Erro inesperado ao tentar criar produto. Erro: ${error} \n Middleware`
        });
    }
}

async function middlewareUpdateCategoryById(req, res, next){
    const {name, slug, use_in_menu} = req.body;
    const category = await categoryModel.findByPk(id);

    try {
        if(!name & !slug & !use_in_menu ){
            return res.status(400).send({
                message : `🔴 Nenhum dado foi fornecido para a atualização da categoria. \n Middleware`
            })
        }
        if(!category){
            return res.status(404).send({
                message: `🔴 Categoria não encontrado! \n Middleware`
            })
        }
        next() 


    } catch (error) {
        res.status(400).send({
            message: `🔴 Erro inesperado ao tentar atualizar produto. Erro: ${error} \n Middleware`
        });
    }


}

async function middlewareDeleteCategoryById(req, res, next){
    try {
        const id = parseInt(req.params.id);
        const category = await categoryModel.findByPk(id);

        if (isNaN(id) || id <= 0) {
            return res.status(400).send({
                message: '❌ O ID fornecido é inválido. Por favor, forneça um ID numérico válido!'
            });
        }
        if (!category) {
            return res.status(404).send({
                message: `🔴 Categoria com ID: ${id} não encontrado! 😰`
            });
        }
        next()

    } catch (error) {
        res.status(404).send({
            message: `🔴 Erro inesperado ao tentar deletar categoria. Erro: ${error} \n Middleware`
        })
    }
}



module.exports ={
    middlewareCreateNewCategory,
    middlewareUpdateCategoryById, 
    middlewareDeleteCategoryById
}
