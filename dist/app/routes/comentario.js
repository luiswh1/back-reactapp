"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _ComentariosController = require('../controllers/ComentariosController'); var _ComentariosController2 = _interopRequireDefault(_ComentariosController);

const routes = new (0, _express.Router)();

routes.get('/comentarios', _ComentariosController2.default.index);
routes.get('/comentarios/:id', _ComentariosController2.default.show);
routes.post('/comentarios', _ComentariosController2.default.store);
routes.put('/comentarios/:id', _ComentariosController2.default.update);
routes.delete('/comentarios/:id', _ComentariosController2.default.delete);

exports. default = routes;