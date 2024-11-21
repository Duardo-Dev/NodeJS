// const connection = require('./connection');
// require('../../models/usersModels');

// (async () => {
//     try {
//         await connection.authenticate();
//         await connection.sync({alter:true})
//         console.log('conexão com o banco estabelecida com sucesso!')
//     } catch (error) {
//         console.log(`Erro ao tentar conexão com o banco: ${error}`)
//     }finally{
//         await connection.close();
//         console.log('Conexão com o banco de dados encerrada')
//     }
// })();


const connection = require('./connection');
require('../../models/usersModels'); //SE TIRAR O ; O CODIGO QUEBRA KKKKKKKKKKKKKKKK
require('../../models/adressModel');
require('../../models/productsModel');
require('../../models/categoryModel');
require('../../models/imageModels');
require('../../models/productsCategory');
require('../../models/productOptionModel');

(async () => {
    try {
        await connection.authenticate();
        await connection.sync({alter:true})
        console.log('conexão com o banco estabelecida com sucesso!')
    } catch (error) {
        console.log(`Erro ao tentar conexão com o banco: ${error}`)
    }finally{
        await connection.close();
        console.log('Conexão com o banco de dados encerrada')
    }
})();































