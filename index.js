const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.status(200).send({ message: 'Olá mundo esse é meu novo repositorio clonado.' })
});

app.get('/rotaOla', (req, res) => {
    res.status(200).send({ message: 'Olá' });
});

app.listen(4001, () => {
    console.log('Api inicializada na porta 4001');
})
