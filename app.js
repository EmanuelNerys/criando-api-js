import { estoque, caixa } from './estoque.js';
import express from 'express';

const app = express();

app.get('/estoque', (req, res) => {
    res.status(200).json({ estoque, caixa });
});

app.listen(3000,() => {
    console.log('Servidor rodando na porta 3000');
});
