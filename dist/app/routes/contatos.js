"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _ContatosController = require('../controllers/ContatosController'); var _ContatosController2 = _interopRequireDefault(_ContatosController);

const routes = new (0, _express.Router)();

routes.post('/contatos', _ContatosController2.default.store);

exports. default = routes;