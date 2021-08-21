/** @format */

require("colors");
console.clear();

const { guardarDB } = require("./helpers/guardarArchivo.js");
// const { showMenu, pausa } = require("./helpers/mensajes.js");
const { inquirerMenu, pausa, leerInput } = require("./helpers/inquirer.js");
const Tareas = require("./models/tareas");

const main = async () => {
  let opt = "";
  const tareas = new Tareas();

  do {
    //Function -- imprime menú
    opt = await inquirerMenu();

    switch (opt) {
      case "1":
        const desc = await leerInput("Descripcion:");
        tareas.crearTarea(desc);
        break;
      case "2":
        console.log(tareas.listadoArr);
        break;

      default:
        break;
    }

    guardarDB(tareas.listadoArr);

    await pausa();
  } while (opt !== "0");
};

main();
