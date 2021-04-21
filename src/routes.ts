import { Router } from "express";
import { SettingsController } from "./controllers/SettingsController";

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

routes.post("/settings", settingsController.create);

export { routes };
