/** @format */
require("dotenv").config();
require("colors");
console.clear();
const {
  inquirerMenu,
  pausa,
  leerInput,
  listarLugares,
} = require("./helpers/inquirer");
const Busquedas = require("./models/busquedas");

const main = async () => {
  const busqueda = new Busquedas();
  let opt = 0;

  do {
    opt = await inquirerMenu();
    switch (opt) {
      case 1:
        //Mostrar mensaje
        const busq = await leerInput("Ingrese la ciudad");

        //Buscar los Lugares
        const lugares = await busqueda.ciudad(busq);

        //Seleccionar el lugar
        const id = await listarLugares(lugares);
        if (id === 0) continue;

        // Datos
        const lugarSel = lugares.find((l) => l.id === id);

        //Guardar en DB
        busqueda.agregarHistorial(lugarSel.nombre);

        const estado = await busqueda.climaLugar(lugarSel.lat, lugarSel.lng);
        // Mostrar los resultados
        console.clear();
        console.log("\nInformación del lugar\n".green);
        console.log("Ciudad::", lugarSel.nombre.green);
        console.log("Latitud::", lugarSel.lat);
        console.log("Longitud::", lugarSel.lng);
        console.log("Temperatura::", estado.temp);
        console.log("Temperatura Mín::", estado.min);
        console.log("Temperatura Max::", estado.max);
        console.log("Como está el clima::", estado.descripcion.green);
        break;
      case 2:
        busqueda.historial.forEach((lugar, i) => {
          const idx = `${i + 1}.`.green;
          console.log(`${idx} ${lugar}`);
        });
        break;
      default:
        break;
    }
    if (opt !== 0) await pausa();
  } while (opt !== 0);
};

main();
