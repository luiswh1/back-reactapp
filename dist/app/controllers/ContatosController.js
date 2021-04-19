"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Contato = require('../models/Contato'); var _Contato2 = _interopRequireDefault(_Contato);

class ContatosController {
    async store(req, res) {
        const { name, email, telefone, created_at } = req.body;

        try {
            const contatos = await _Contato2.default.create({
                name,
                email,
                telefone,
                created_at: new Date()
            });

            return res.status(201).json(contatos);
        }
        catch (error) {
            return res.status(400).send({
                message: "Falha no cadastro de um novo contato"
            });
        }
    }

}

exports. default = new ContatosController();