"use strict";const { Contatos, ContatosCreate } = require('../app/documentation/Contatos');
const { Comentario, ComentarioCreate, ComentarioUpdate, ComentarioDelete } = require('../app/documentation/Comentarios');

module.exports = {
    info: {
        version: '1.0.0',
        title: 'Documentação Curriculo',
        description: 'Documentação Curriculo',        
    },
    host: 'localhost:3000',
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json'],
    
    
    definitions: {
       Contatos,
       ContatosCreate,
       Comentario, 
       ComentarioCreate,
       ComentarioUpdate,
       ComentarioDelete,
    }
}