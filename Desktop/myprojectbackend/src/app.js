const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
require('dotenv').config(); //carregar JWT_SECRET


dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

// Importando as rotas
const userRoutes = require('./routes/user.routes');
const categoryRoutes = require('./routes/category.routes');
const productRoutes = require('./routes/product.routes');


app.get('/', (req, res) => {
  res.status(200).json({ message: 'API está em execução!' });
});

// Usando as rotas
app.use('/v1/user', userRoutes);
app.use('/v1/category', categoryRoutes);
app.use('/v1/product', productRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

// Tratamento de rotas não encontradas (404)
app.use((req, res, next) => {
  res.status(404).json({ message: 'Rota não encontrada.' });
});

// Middleware de tratamento de erros geral
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Erro interno do servidor.' });
});

module.exports = app;

