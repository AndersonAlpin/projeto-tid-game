import express from 'express';

import './database/connection';

const app = express();
const port = 3333;

app.use(express.json());

app.get('/', (req, res) => {
  return res.json({ message: "Servidor rodando!" });
})

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
})