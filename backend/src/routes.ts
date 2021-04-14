import { Router } from "express"
import { getRepository } from "typeorm";

const routes = Router();

routes.get('/', (req, res) => {
  return res.json({ message: "Servidor rodando!" });
})

export default routes;