import express from 'express';

const app = express();
const port = 3333;

app.get('/', (req, res) => {
  return res.json({ message: "Servidor rodando!" });
})

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
})