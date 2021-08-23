/** @format */
require("dotenv").config();
require("colors");
console.clear();

const { inquirerMenu, pausa, leerInput } = require("./helpers/inquirer");
const Busquedas = require("./models/busquedas");

const main = async () => {
  const busqueda = new Busquedas();
  let opt = 0;

  do {
    opt = await inquirerMenu();
    switch (opt) {
      case 1:
        //Mostrar mensaje
        const lugar = await leerInput("Ingrese la ciudad");
        await busqueda.ciudad(lugar);
        //Buscar los Lugares

        //Seleccionar el lugar

        // Datos

        // Mostrar los resultados
        console.log("\nInformación del lugar\n".green);
        console.log(`Ciudad:`);
        console.log(`Latitud:`);
        console.log(`Longitud:`);
        console.log(`Temperatura:`);
        console.log(`Temperatura Mín`);
        console.log(`Temperatura Max`);
        break;
      case 2:
        console.log("Selecciono la segunda opción");
        break;
      default:
        break;
    }
    if (opt !== 0) await pausa();
  } while (opt !== 0);
};

main();
