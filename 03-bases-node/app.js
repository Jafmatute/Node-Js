/** @format */

const { crearTBL } = require("./helpers/multiplicar.js");

console.clear();

const [, , arg3 = "base=5"] = process.argv;
const [, base = 5] = arg3.split("=");
console.log(base);

// const base = 3;

crearTBL(base)
  .then((archivo) => console.log(archivo, "creada."))
  .catch((err) => console.log(err));
