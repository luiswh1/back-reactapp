import { Router } from 'express';
import ContatosController from '../controllers/ContatosController';

const routes = new Router();

routes.post('/contatos',
 ContatosController.store
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

export default routes;