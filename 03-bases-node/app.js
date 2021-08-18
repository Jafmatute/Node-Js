/** @format */

const { crearTBL } = require("./helpers/multiplicar.js");
const argv = require("./config/yargs.js");
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
