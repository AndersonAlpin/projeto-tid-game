import { Router } from "express"
import PlayersController from "./controllers/PlayersController";

const routes = Router();

routes.get('/', PlayersController.index);
routes.post('/login', PlayersController.login);
routes.post('/register', PlayersController.register);
export default routes;