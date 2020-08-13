const express = require('express');
const routes = express.Router();

//Retorna todos os pedidos
routes.get('/', (req, res, next) =>{
    res.status(200).send({
        mensagem: 'Todos os pedidos'
    });
});

//Insere um pedido
routes.post('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Pedido inserido'
    });
});

//Retorna os dados de um pedido pelo id
routes.get('/:id_pedido', (req, res, next) =>{
    const id = req.params.id_pedido;

    
        res.status(200).send({
            mensagem: 'Dados do pedido: ',
            id: id
        }); 

});

//Altera um pedido
routes.patch('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Pedido alterado'
    });
});

//Exclui um pedido
routes.delete('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Pedido excluído'
    });
});
module.exports = routes;