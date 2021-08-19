/** @format */

const { crearTBL } = require("./helpers/multiplicar.js");
require("colors");
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

crearTBL(argv.b, argv.l, argv.h)
  .then((archivo) => console.log(archivo.rainbow, "creada."))
  .catch((err) => console.log(err));
