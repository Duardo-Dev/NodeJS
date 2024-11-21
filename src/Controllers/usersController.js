const userModel = require('../models/usersModels');
const bcrypt = require('bcrypt');

const createNewUser = async (req, res) => {
    const { nome, sobrenome, email, senha } = req.body;
    const saltRounds = 10;

    const senhaHast = await bcrypt.hash(senha, saltRounds);

    try {
        // Lógica para salvar os dados no banco de dados
        const novoUsuario = await userModel.create({
            first_name: nome,
            surname: sobrenome,
            email,
            password: senhaHast
        });
        res.status(201).send({ message: `Usuário ${novoUsuario.first_name} criado com sucesso!` });
    } catch (error) {
        res.status(500).send({ error: 'Erro ao criar usuário.' });
    }
}



// const getAllUsers = async (req, res) => {
//     try {
//         const users = await userModel.findAll();
//         res.status(200).send(users);
//     } catch (error) {
//         res.status(500).send({
//             message: 'Erro ao listar usuários: ' + error.message
//         });
//     }
// };

const getAllUsers = async (req, res) => {
    try {
        // Pegando o valor do parâmetro limit da query string
        const limit = parseInt(req.query.limit);  // Padrão de 5 usuários caso o parâmetro não seja fornecido
        
        // Buscando os usuários com o limite
        const users = await userModel.findAll({
            limit: limit // Aplicando o limite na consulta ao banco
        });

        res.send(users);
        
    } catch (error) {
        res.send({
            message: `❌ Erro ao listar os usuários! Erro: ${error}`
        });
    };
};




const updateUserById = async (req, res) => {
    const id = parseInt(req.params.id);

    try {
        const exists = await userModel.findByPk(id);
        if (exists) {
            await userModel.update({ ...req.body }, { where: { id: id } });
            res.status(200).send({
                message: `Usuário ${id} atualizado com sucesso`
            });
        } else {
            res.status(404).send({
                message: `Usuário não encontrado`
            });
        }
    } catch (error) {
        res.status(500).send({
            message: `Erro ao atualizar usuário: ${error.message}`
        });
    }
};

const deleteUserById = async (req, res) => {
    const id = parseInt(req.params.id);

    try {
        const user = await userModel.findByPk(id);
        if (user) {
            await userModel.destroy({ where: { id: id } });
            res.status(200).send({
                message: `🟢 Usuário de ID ${id} foi deletado com sucesso!`
            });
        } else {
            res.status(404).send({
                message: `🔴 Usuário com ID: ${id} não encontrado! 😰`
            });
        }
    } catch (error) {
        res.status(500).send({
            message: `❌ Algo de errado aconteceu ao deletar o usuário. Erro: ${error.message}`
        });
    }
};

module.exports = {
    createNewUser,
    getAllUsers,
    updateUserById,
    deleteUserById
};
