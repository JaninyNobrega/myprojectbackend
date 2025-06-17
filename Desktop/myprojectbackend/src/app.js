const express = require('express');
const dotenv = require('dotenv');


dotenv.config();

const app = express();

app.use(express.json());

// Importando as rotas
const userRoutes = require('./routes/user.routes');
const categoryRoutes = require('./routes/category.routes');


app.get('/', (req, res) => {
  res.status(200).json({ message: 'API está em execução!' });
});

// Usando as rotas
app.use('/v1/user', userRoutes);
app.use('/v1/category', categoryRoutes);


module.exports = app;