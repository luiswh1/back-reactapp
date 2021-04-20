import { Router } from 'express';
import ComentarioController from '../controllers/ComentariosController';

const routes = new Router();

routes.get(
    '/comentarios',
     ComentarioController.index
      // #swagger.description = 'Lista de Comentarios'
    // #swagger.tags = ['Comentarios']
    /*
        #swagger.response[200] = {
            schema: {
                "$ref": "#/definitions/Comentario"
            }
        }
    */  
   /*
        #swagger.response[400] = {
            schema: {
                msg: 'Falha ao exibir comentarios'
            }
        }
   */  
     );
routes.get(
    '/comentarios/:id', 
    ComentarioController.show
    // #swagger.description = 'Busca um Comentario pelo ID'
    // #swagger.tags = ['Comentarios'] 
    /*
        #swagger.parameters['id'] = {
            in: 'path',
            description: 'ID do comentario',
            required: true,
            type: 'integer'
        }
    */   
   /*
        #swagger.responses[200] = {
            schema: {
                "$ref": "#/definitions/Comentario"
            }
        }
   */
  /*
    #swagger.responses[404] = {
            schema: {
                msg: 'falha ao exibir comentario'
            }
    }   
  */
    );
routes.post(
    '/comentarios',
     ComentarioController.store
      // #swagger.description = 'Criar um novo comentario'
     // #swagger.tags = ['Comentarios']
     /*
        #swagger.parameters['comentario'] = {
            in: 'body',
            description: "Dados do comentario",
            schema: {
                "$ref": "#/definitions/ComentarioCreate"
            }
        }
     */
    /*
        #swagger.parameters['id'] = {
            in: 'path',
            description: 'ID da comentario',
            required: true,
            type: 'integer'
        }
    */
    /*
        #swagger.responses[201] = {
            schema: {
                "$ref": "#/definitions/Comentario"
            }
        }
    */
   /*
        #swagger.responses[400] = {
            schema: {
                msg: "Falha ao registrar novo comentario."
            }
        }
    */    
     );
routes.put(
    '/comentarios/:id',
     ComentarioController.update
         // #swagger.description = 'Atualiza os dados de um comentario já criado'
     // #swagger.tags = ['Comentarios']
     /*
        #swagger.parameters['comentarios'] = {
            in: 'body',
            description: 'Dados do comentario',
            schema: {
                "$ref": "#/definitions/ComentarioUpdate"
            }
        }
    */
   /*
        #swagger.responses[200] = {
            schema: {
                "$ref": "#/definitions/Comentario"
            }
        }
    */
   /*
        #swagger.responses[400] = {
            schema: {
                msg: "Não foi possivel editar o comentario"
            }
        }
    */    
     );
routes.delete(
    '/comentarios/:id', 
    ComentarioController.delete
    // #swagger.description = 'Obtem um comentario pelo ID'
    // #swagger.tags = ['Comentarios']
    /*
        #swagger.parameters['id'] = {
            in: 'path',
            description: 'ID do comentario',
            required: true,
            type: 'integer'
        }
    */
   /*
        #swagger.responses[200] = {
            schema: {
                "$ref": "#/definitions/ComentarioDelete"
            }
        }
    */
   /*
        #swagger.responses[400] = {
            schema: {
                msg: "Falha ao deletar comentario."
            }
        }
    */    
    );

export default routes;