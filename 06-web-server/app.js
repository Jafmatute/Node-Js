/** @format */

const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "hbs");

//Mostrar index html
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home", {
    nombre: "Josue Flores",
    titulo: "Express -Node",
  });
});

//Rutas de la página web
app.get("/generic", (req, res) => {
  res.sendFile(__dirname + "/public/generic.html");
});

app.get("/elements", (req, res) => {
  res.sendFile(__dirname + "/public/elements.html");
});

app.listen(port, () => {
  console.log(
    `Su proyecto está corriendo en el puerto http://localhost:${port}`
  );
});
