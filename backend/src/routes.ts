import { Router } from "express"
import PlayersController from "./controllers/PlayersController";

const routes = Router();

routes.get('/', PlayersController.index);

export default routes;