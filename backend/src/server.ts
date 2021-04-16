import express from 'express';
//import './database/connection';
import db from './database/db';
import routes from './routes';

const app = express();
const port = 3333;

console.info('Starting database...')
db.startAsync();
app.use(express.json()); 
app.use(routes);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
})