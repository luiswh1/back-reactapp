"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _ContatosController = require('../controllers/ContatosController'); var _ContatosController2 = _interopRequireDefault(_ContatosController);

const routes = new (0, _express.Router)();

routes.post('/contatos',
 _ContatosController2.default.store
 // #swagger.description = 'Criar um novo contato'
     // #swagger.tags = ['Contatos']
     /*
        #swagger.parameters['contato'] = {
            in: 'body',
            description: "Dados do contato",
            schema: {
                "$ref": "#/definitions/ContatosCreate"
            }
        }
     */
    /*
        #swagger.parameters['id'] = {
            in: 'path',
            description: 'ID do contato',
            required: true,
            type: 'integer'
        }
    */
    /*
        #swagger.responses[201] = {
            schema: {
                "$ref": "#/definitions/Contatos"
            }
        }
    */
   /*
        #swagger.responses[400] = {
            schema: {
                msg: "Falha no cadastro de um novo contato"
            }
        }
    */    
 );

exports. default = routes;