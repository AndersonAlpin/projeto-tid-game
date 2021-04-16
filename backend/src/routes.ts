import { Router } from "express"
import PlayersController from "./controllers/PlayersController";

const routes = Router();

routes.get('/', PlayersController.index);
routes.post('/login', PlayersController.login);
routes.post('/register', PlayersController.register);

routes.get('/players', PlayersController.allPlayers);
routes.get('/player', PlayersController.playersQuery);
export default routes;