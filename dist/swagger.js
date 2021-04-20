"use strict";const swaggerAutogen = require('swagger-autogen')();
const config = require('./config/swagger');

const endpoints = [
    './src/app/routes/contatos.js',
    './src/app/routes/comentario.js'
];
const outputFile = './src/swagger_documentation.json';

swaggerAutogen(outputFile, endpoints, config);