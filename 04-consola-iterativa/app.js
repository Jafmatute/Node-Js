/** @format */

require("colors");
console.clear();

// const { showMenu, pausa } = require("./helpers/mensajes.js");
const { inquirerMenu, pausa, leerInput } = require("./helpers/inquirer.js");
const Tarea = require("./models/tarea.js");
const Tareas = require("./models/tareas");
const main = async () => {
  let opt = "";
  const tareas = new Tareas();

  do {
    opt = await inquirerMenu();

    switch (opt) {
      case "1":
        const desc = await leerInput("Descripcion:");
        tareas.crearTarea(desc);
        break;
      case "2":
        console.log(tareas._listado);
        break;

      default:
        break;
    }

    await pausa();
  } while (opt !== "0");
};

main();
