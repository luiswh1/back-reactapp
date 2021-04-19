import app from './app';

app.listen(3000);

app.get('/', (req, res ) => {
    res.json('Servidor Iniciado')
})