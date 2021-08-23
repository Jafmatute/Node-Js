/** @format */

const express = require("express");
const app = express();
const port = 3000;

//Midleware (servir contenido estático)
app.use(express.static("public"));

app.get("/menu", (req, res) => {
  res.send("menu");
});

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/public/404.html");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
