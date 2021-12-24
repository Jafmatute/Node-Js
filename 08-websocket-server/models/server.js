/** @format */

const express = require("express");
const cors = require("cors");

class Server {
  //Inicialización
  constructor() {
    //Express
    this.app = express();
    this.port = process.env.PORT;
    this.server = require("http").createServer(this.app);
    this.io = require("socket.io")(this.server);

    //Rutas Middleware
    this.paths = {};

    //Middlewares
    this.middlewares();

    //Llamar rutas app
    this.routes();
  }

  //Middlewares
  middlewares() {
    //CORS
    this.app.use(cors());

    //Directorio Público
    this.app.use(express.static("public"));
  }

  //Correr app
  listen() {
    this.server.listen(this.port, () => {
      console.log(`URL::: http://localhost:${this.port}`);
    });
  }

  //Rutas
  routes() {
    //requerir mis rutas
    // this.app.use(this.paths.auth, require("../routes/auth"));
  }
}

module.exports = Server;
