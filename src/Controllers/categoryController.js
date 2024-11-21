const categoryModel = require('../models/categoryModel');

//name slug use_in_menu
const createNewCategory = async (req, res) => {
    const { name, slug, use_in_menu } = req.body;

    try {
        const newCategory = await categoryModel.create({
            name: name,
            slug: slug,
            use_in_menu: use_in_menu
        });

        res.status(201).send({
            message: `Categoria criada com sucesso! ID: ${newCategory.id}`
        });
    } catch (error) {
        res.status(500).send({
            message: `Erro ao criar a categoria: ${error.message}`
        });
    }
};

const getAllCategory = async (req, res) => {
    try {
        const categories = await categoryModel.findAll();
        res.status(200).send(categories);
    } catch (error) {
        res.status(500).send({
            message: `Erro ao buscar categorias: ${error.message}`
        });
    }
};

const updateCategoryById = async (req, res) => {
    const id = parseInt(req.params.id);
    
    try {
        const exists = await categoryModel.findByPk(id);
        if (exists) {
            await categoryModel.update({ ...req.body }, { where: { id: id } });
            res.status(200).send({
                message: `Categoria com ID ${id} atualizada com sucesso`
            });
        } else {
            res.status(404).send({
                message: `Categoria não encontrada`
            });
        }
    } catch (error) {
        res.status(500).send({
            message: `Erro ao atualizar a categoria: ${error.message}`
        });
    }
};

const deleteCategoryById = async (req, res) => {
    const id = parseInt(req.params.id);
    
    try {
        const exists = await categoryModel.findByPk(id);
        if (exists) {
            await categoryModel.destroy({ where: { id: id } });
            res.status(200).send({
                message: `Categoria com ID ${id} foi deletada com sucesso`
            });
        } else {
            res.status(404).send({
                message: `Categoria não encontrada`
            });
        }
    } catch (error) {
        res.status(500).send({
            message: `Erro ao deletar a categoria: ${error.message}`
        });
    }
};

module.exports = {
    createNewCategory,
    getAllCategory,
    updateCategoryById,
    deleteCategoryById
};
