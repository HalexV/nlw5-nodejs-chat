// O import e export abaixo só funciona se adicionar no package.json o item type: module
// Nesse projeto foi instalado o ts-node-dev -D para fazer isso funcionar. Foi criado um script dev: ts-node-dev src/server.js
import express from "express"

import "./database"
import { routes } from "./routes" 

const app = express()

/* 
  - GET = buscas
  - POST = Criação
  - PUT = Alteração
  - DELETE = Deletar
  - PATCH = Alterar uma informação específica
*/

app.use(express.json())

app.use(routes)

app.listen(3333, () => console.log(`Server is running on port: 3333`))