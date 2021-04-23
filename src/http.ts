// O import e export abaixo só funciona se adicionar no package.json o item type: module
// Nesse projeto foi instalado o ts-node-dev -D para fazer isso funcionar. Foi criado um script dev: ts-node-dev src/server.js
import express from "express";

import { createServer } from "http";
import { Server, Socket } from "socket.io";
import path from "path";

import "./database";
import { routes } from "./routes";

const app = express();

app.use(express.static(path.join(__dirname, "..", "public")));
app.set("views", path.join(__dirname, "..", "public"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

app.get("/pages/client", (req, res) => {
  return res.render("html/client.html");
});

app.get("/pages/admin", (req, res) => {
  return res.render("html/admin.html");
});

const http = createServer(app); // Criando o protocolo http
const io = new Server(http); // Criando o protocolo WS

io.on("connection", (socket: Socket) => {
  console.log("Se conectou", socket.id);
});

/* 
  - GET = buscas
  - POST = Criação
  - PUT = Alteração
  - DELETE = Deletar
  - PATCH = Alterar uma informação específica
*/

app.use(express.json());

app.use(routes);

export { http, io };
