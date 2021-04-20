import request from 'supertest';
import app from '../../src/app';
import Contato from '../../src/app/models/Contato';
import truncate from '../utils/truncate';

describe('Contacts Tests', () => {
    jest.setTimeout(80000);
    beforeAll(async () => {
        await truncate();

        const contatoTeste = await Contato.create({
            name: 'Luis Weber',
            email: 'luisw.teste.com',
            telefone:'539999999',
            created_at: new Date()
        });
    });

    it('Should create a new Contact', async () => {
        expect.assertions(1);
        const result = await request(app)
            .post('/contatos')
            .send({
            name: 'Luis Henrique Maciel Weber',
            email: 'luisw.teste.com.br',
            telefone:'53999999999',
            create_at: new Date()
            });

            expect(result.status).toBe(201);
    });

});