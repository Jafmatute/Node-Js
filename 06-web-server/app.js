/** @format */
//importaciones
const express = require("express");
const hbs = require("hbs");
require("dotenv").config();

//express
const app = express();
const port = process.env.PORT;

//hbs(HandleBars)
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

//Mostrar index html
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home", user());
});

//Rutas de la página web
app.get("/generic", (req, res) => {
  res.render("generic", user());
});

app.get("/elements", (req, res) => {
  res.render("elements", user());
});

app.listen(port, () => {
  console.log(
    `Su proyecto está corriendo en el puerto http://localhost:${port}`
  );
});

function user() {
  return {
    nombre: "Josue Flores",
    titulo: "Express -Node",
  };
}
