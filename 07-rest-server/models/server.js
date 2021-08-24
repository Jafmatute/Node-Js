/** @format */

const express = require("express");

class Server {
  //Inicialización
  constructor() {
    //Express
    this.app = express();
    this.port = process.env.PORT;

    //Middlewares
    this.middlewares();

    //Llamar rutas app
    this.routes();
  }

  //Middlewares
  middlewares() {
    //Directorio Público
    this.app.use(express.static("public"));
  }

  //Rutas
  routes() {
    this.app.get("/", (req, res) => {
      res.send("Hola Mundo");
    });
  }

  //Correr app
  listen() {
    this.app.listen(this.port, () => {
      console.log(`URL::: http://localhost:${this.port}`);
    });
  }
}

module.exports = Server;
