import request from 'supertest';
import app from '../../src/app';
import Comentario from '../../src/app/models/Comentario';
import truncate from '../utils/truncate';

describe('Commentary tests', () => {
    jest.setTimeout(80000);
    beforeAll(async () => {
        await truncate();

        const createCommentary = await Comentario.create({
            name: 'Luis Weber',
            comentario: 'Passou no teste!',
            created_at: new Date()
        });
    })

    it('Should return all commentarys', async () => {
        expect.assertions(1);

        const result = await request(app)
            .get('/comentarios')
            expect(result.status).toBe(200);
    });

    it('Should create a new Commentary', async () => {
        expect.assertions(1);

        const result = await request(app)
            .post('/comentarios')
            .send({
            name: 'Marcele ',
            comentario: 'Passou no teste!',
            created_at: new Date()
            });

            expect(result.status).toBe(201);
    });

    it('Should return a specific commentary', async () => {
        expect.assertions(3);
 
         const buscarComentario = await Comentario.findOne({
             where: { name: 'Luis Weber' }
         });
 
 
         const result = await request(app)
             .get(`/comentarios/${buscarComentario.id}`);
         
             expect(result.status).toBe(200);
             expect(result.body.id).toBeDefined();
             expect(result.body.name).toBe('Luis Weber');
     
     });

     it('Should update a commentary', async () => {
        expect.assertions(1);

        const buscarComentario = await Comentario.findOne({
            where: { name: 'Luis Weber' }
        });

        const result = await request(app)
            .put(`/comentarios/${buscarComentario.id}`)
            .send({
                name: 'Luis Henrique Maciel Weber'
            });
        
            expect(result.status).toBe(200);
    });

    it('Should Delete a Commentary', async () => {
        expect.assertions(1);

        const buscarCategoria = await Comentario.findOne({
            where: { name: 'Luis Henrique Maciel Weber' }
        });


        const result = await request(app)
            .delete(`/comentarios/${buscarCategoria.id}`);
        
            expect(result.status).toBe(200);
    });
})