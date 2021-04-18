import { Router } from "express"
import PlayersController from "./controllers/PlayersController";

const routes = Router();

//routes.get('/', PlayersController.index);
routes.get('/login', PlayersController.login);
routes.post('/register', PlayersController.register);

routes.get('/players', PlayersController.authMiddleware, PlayersController.allPlayers);
routes.get('/player', PlayersController.authMiddleware, PlayersController.playersQuery);
export default routes;