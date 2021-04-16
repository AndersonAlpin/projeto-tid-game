import playerService from '../services/playerService'
import { Request, Response } from "express";


export default {
  // APENAS PARA TESTAR A FUNCIONALIDADE
  async index(request: Request, response: Response) {
    return response.json({ message: "Servidor rodando!" });
  },

  async login(request: Request, response: Response) {
    return response.sendStatus(200);
  },

  async register(request: Request, response: Response) {
    const validator: any = await playerService.newRegister(request.body);
    if(validator.erro) return response.status(400).json(validator.erro);
    if(validator.sucesso)return response.status(201).json(validator.sucesso);
  },

  async allPlayers(request: Request, response: Response) {
    const result = await playerService.getAll();
    return response.status(200).json(result);
  },
  
  async playersQuery(request: Request, response: Response) {
    const result = await playerService.getSearchQuery(request.query);
    if(result.erro) return response.status(400).json(result.erro);
    if(result.message) return response.status(200).json(result.message);
    return response.status(200).json(result);
  },
};
