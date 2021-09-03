/** @format */

const express = require("express");
const cors = require("cors");
const { dbConnection } = require("../database/config");

class Server {
  //Inicialización
  constructor() {
    //Express
    this.app = express();
    this.port = process.env.PORT;

    //Rutas Middleware
    this.paths = {
      auth: "/api/auth",
      categorias: "/api/categorias",
      usuarios: "/api/usuarios",
    };

    //Conectar a la base de datos
    this.conectarDB();
    //Middlewares
    this.middlewares();

    //Llamar rutas app
    this.routes();
  }

  async conectarDB() {
    await dbConnection();
  }

  //Middlewares
  middlewares() {
    //CORS
    this.app.use(cors());

    //Lectura y Parseo del body
    this.app.use(express.json());

    //Directorio Público
    this.app.use(express.static("public"));
  }

  //Correr app
  listen() {
    this.app.listen(this.port, () => {
      console.log(`URL::: http://localhost:${this.port}`);
    });
  }

  //Rutas
  routes() {
    //requerir mis rutas
    this.app.use(this.paths.auth, require("../routes/auth"));
    this.app.use(this.paths.usuarios, require("../routes/usuarios"));
    this.app.use(this.paths.categorias, require("../routes/categorias"));
  }
}

module.exports = Server;
