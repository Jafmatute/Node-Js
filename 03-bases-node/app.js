/** @format */

const { number, options } = require("yargs");
const { crearTBL } = require("./helpers/multiplicar.js");
const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
  })
  .option("l", {
    alias: "listar",
    type: "boolean",
    demandOption: false,
    default: false,
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "La base tiene que ser un número";
    }
    return true;
  }).argv;

console.clear();
/** 
 *  Manualmente
 *  const [, , arg3 = "base=5"] = process.argv;
    const [, base = 5] = arg3.split("=");
    console.log(base);

    const base = 3;

    crearTBL(base)
  .then((archivo) => console.log(archivo, "creada."))
  .catch((err) => console.log(err));
*/

crearTBL(argv.b, argv.l)
  .then((archivo) => console.log(archivo, "creada."))
  .catch((err) => console.log(err));
