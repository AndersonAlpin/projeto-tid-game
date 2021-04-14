import { Request, Response } from "express";
import { getRepository } from "typeorm";
import Player from "../models/Player";

export default {
  async index(request: Request, response: Response) {
    return response.json({ message: "Servidor rodando!" });
  }
}