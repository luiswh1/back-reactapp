"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Comentario = require('../models/Comentario'); var _Comentario2 = _interopRequireDefault(_Comentario);

class ComentarioController {
    async index(req, res) {
        try {
            const comentarios = await _Comentario2.default.findAll({

            });

            return res.json(comentarios)
        }

        catch (error) {
            console.log(error)
            return res.status(400).send({
                message: "Falha ao exibir comentarios"
            });
        }
    }

    async show(req, res) {
        const { id } = req.params;
        try {
            const comentarios = await _Comentario2.default.findByPk(id, {

            });
            return res.json(comentarios);
        }
        catch (error) {
            return res.status(400).send({
                message: "Falha ao exibir comentarios"
            });
        }
    }

    async store(req, res) {
        const { name, comentario, created_at } = req.body;
        try {
            const comment = await _Comentario2.default.create({
                name,
                comentario,
                created_at: new Date()
            });

            return res.status(201).json(comment);
        }
        catch (error) {
            return res.status(400).send({
                message: "Falha ao registrar novo comentario"
            });
        }
    }

    async update(req, res) {
        const { name, comentario } = req.body;
        const { id } = req.params;

        try{
        const [linhas, objetos] = await _Comentario2.default.update({
            name,
            comentario
        }, {
            where: { id },
            returning: true            
        });

        return res.json({
            linhas,
            objetos
        });
        }
        catch (error){
            return res.status(400).send({
                message: "Não foi possivel editar o comentario"
            });
        }
    }

    async delete(req, res) {
        const { id } = req.params;

        try{
        const linhas = await _Comentario2.default.destroy({
            where: { id },
            returning: true
        });

        return res.json(linhas);

        }
        catch (error){
            return res.status(400).send({
                message: "Falha ao deletar comentario"
            });
        }
    }
}

exports. default = new ComentarioController();