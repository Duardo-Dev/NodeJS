const listaAnimes = require('../mocks/animes')


function getAllAnimes (req, res) {
    res.send(listaAnimes)
}


function getAnimeById (req,res) {
    const id = parseInt(req.params.id);
    const anime = listaAnimes.find(p => p.id === id);

    if (anime) {
        res.send(anime);
    } else {
        res.send({ message: "Anime não encontrado" })
    }

  }

function createAnime (req, res) {
    const {
        nome, 
        ano, nota, 
        genero, 
        episodios, 
        imagem, 
        sinopse} = req.body;
        
        // Ternário -> x ? condição = true : valor estabelecido
    const id = listaAnimes.length ? listaAnimes[listaAnimes.length -1].id +1 : 1;
   
        
        listaAnimes.push({id,nome, ano, nota, genero, episodios, imagem, sinopse})

        res.send('🟢 Anime inserido com sucesso! 😁👍')
        
}

function updateAnime (request, response) {
    const { id } = request.params;
    const {
        nome, 
        ano,
        nota, 
        genero, 
        episodios, 
        imagem, 
        sinopse} = request.body;
    const animeIndex = listaAnimes.findIndex(anime => anime.id === Number(id));

    if (!animeIndex === -1) {
        return response.send({ mensage: "🔴 Anime não encontrado 😰" })
    }

    listaAnimes[animeIndex] = {
        // Desestruturação do JSON para a devida visualização dos Valores
        ...listaAnimes[animeIndex], 
        nome, 
        ano,
        nota, 
        genero, 
        episodios, 
        imagem, 
        sinopse
    }
    response.send('🟢 Anime atualizado com sucesso! 😁👍')
}


function deleteAnimeById (req, res) {
    const { id } = req.params;
    const animeIndex = listaAnimes.findIndex(anime => anime.id === Number(id));

    if (animeIndex === -1) {
        return res.status(404).send("🔴 Anime não encontrado 😰");
    }

    listaAnimes.splice (animeIndex, 1); //.splice é o método que removerá informações de dentro de um array.

    res.status(200).send('🟢 Anime deletado da lista! ❌')
}


module.exports = {
    getAllAnimes,
    getAnimeById,
    createAnime,
    updateAnime,
    deleteAnimeById
}