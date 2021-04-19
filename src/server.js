import app from './app';

app.listen(process.env.PORT || 3000);

app.get('/', (req, res ) => {
    res.json('Servidor Iniciado')
})