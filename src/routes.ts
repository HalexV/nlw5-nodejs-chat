import { Router } from "express";
import { MessagesController } from "./controllers/MessagesController";
import { SettingsController } from "./controllers/SettingsController";
import { UsersController } from "./controllers/UsersController";

const routes = Router();

/* 
  Tipos de parametros
  - Routes params => parametros de rotas
  L> http://localhost:3333/settings/1

  - Query params => filtros e buscas
  L> http://localhost:3333/settings/1?search=algumacoisa&some=thing

  - Body params => {

  }
*/

const settingsController = new SettingsController();
const usersController = new UsersController();
const messagesController = new MessagesController();

routes.post("/settings", settingsController.create);
routes.post("/users", usersController.create);

routes.post("/messages", messagesController.create);
routes.get("/messages/:id", messagesController.showByUser);

export { routes };
