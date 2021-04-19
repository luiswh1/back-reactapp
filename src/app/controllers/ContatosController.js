import Contatos from '../models/Contato';

class ContatosController {
    async store(req, res) {
        const { name, email, telefone, created_at } = req.body;

        try {
            const contatos = await Contatos.create({
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

export default new ContatosController();