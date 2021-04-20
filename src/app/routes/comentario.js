import { Router } from 'express';
import ComentarioController from '../controllers/ComentariosController';

const routes = new Router();

routes.get(
    '/comentarios', ComentarioController.index   );
routes.get(
    '/comentarios/:id', 
    ComentarioController.show
   
    );
routes.post(
    '/comentarios',
     ComentarioController.store
  
     );
routes.put(
    '/comentarios/:id',
     ComentarioController.update
 
     );
routes.delete(
    '/comentarios/:id', 
    ComentarioController.delete

    );

export default routes;