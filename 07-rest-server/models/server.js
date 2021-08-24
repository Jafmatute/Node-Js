/** @format */

const express = require("express");
const cors = require("cors");

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
    //CORS
    this.app.use(cors());
    //Directorio Público
    this.app.use(express.static("public"));
  }

  //Rutas
  routes() {
    this.app.get("/api", (req, res) => {
      res.json({
        message: "get api",
      });
    });

    this.app.post("/api", (req, res) => {
      res.status(201).json({
        message: "post api",
      });
    });

    this.app.put("/api", (req, res) => {
      res.json({
        message: "put api",
      });
    });

    this.app.delete("/api", (req, res) => {
      res.json({
        message: "delete api",
      });
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
