import { Router } from 'express';
import ContatosController from '../controllers/ContatosController';

const routes = new Router();

routes.post('/contatos', ContatosController.store);

export default routes;