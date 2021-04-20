"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _dotenv = require('dotenv'); var _dotenv2 = _interopRequireDefault(_dotenv);
require('./database/index');

var _comentario = require('./app/routes/comentario'); var _comentario2 = _interopRequireDefault(_comentario);
var _contatos = require('./app/routes/contatos'); var _contatos2 = _interopRequireDefault(_contatos);
var _docs = require('./app/routes/docs'); var _docs2 = _interopRequireDefault(_docs);

const cors = require("cors");

class App {
    constructor() {
        this.server = _express2.default.call(void 0, );
        this.config();
        this.middlewares();
        this.routers();
    }

    config() {
        this.server.use(cors());
        this.server.use(_express2.default.json());
        _dotenv2.default.config({
            path: process.env.NODE_ENV === 'test'
            ? '.env.test' : '.env',
        });

    }

    middlewares() {   
        this.server.use(cors());     
    }

    routers() {
       this.server.use(_comentario2.default);
       this.server.use(_contatos2.default);
       this.server.use(_docs2.default);
       
    }
}

exports. default = new App().server;