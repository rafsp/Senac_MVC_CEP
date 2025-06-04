const express = require('express');
const cors = require('cors');
const produtoRoutes = require('./routes/produto.routes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/produtos', produtoRoutes);

app.listen(3000, () => console.log('Servidor rodando em http://localhost:3000'));