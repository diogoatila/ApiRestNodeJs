const express = require('express');
const routes = express.Router();

//Retorna todos os produtos
routes.get('/', (req, res, next) =>{
    res.status(200).send({
        mensagem: 'Todos os produtos'
    });
});

//Insere um produto
routes.post('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Produto inserido'
    });
});

//Retorna os dados de um produto pelo id
routes.get('/:id_produto', (req, res, next) =>{
    const id = req.params.id_produto;

    if (id === 'especial'){
        res.status(200).send({
            mensagem: 'Produto exclusivo',
            id: id
        });
    }else{
        res.status(200).send({
            mensagem: 'Aqui está o seu pedido ' + id
        
    
});
    }

});

//Altera um produto
routes.patch('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Produto alterado'
    });
});

//Exclui um produto
routes.delete('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Produto excluído'
    });
});
module.exports = routes;