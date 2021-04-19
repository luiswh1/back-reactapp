import express from 'express';
import dotenv from 'dotenv';
import './database/index';

import ComentarioRout from './app/routes/comentario';
import ContatoRout from './app/routes/contatos';

const cors = require("cors");

class App {
    constructor() {
        this.server = express();
        this.config();
        this.middlewares();
        this.routers();
    }

    config() {
        this.server.use(cors());
        this.server.use(express.json());
        dotenv.config({
            path: process.env.NODE_ENV === 'test'
            ? '.env.test' : '.env',
        });

    }

    middlewares() {   
        this.server.use(cors());     
    }

    routers() {
       this.server.use(ComentarioRout);
       this.server.use(ContatoRout);
       
    }
}

export default new App().server;