import express from 'express';
import dotenv from 'dotenv'
//import './database/connection';
import db from './database/db';
import routes from './routes';

const app = express();
const port = 3333;
dotenv.config();
console.info('Starting database...')
db.startAsync();
app.use(express.json()); 
app.use(routes);

app.listen(port, () => {
  console.log(`Servidor rodando em http://[::1]:${port}`);
})