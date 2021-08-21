/** @format */

require("colors");
console.clear();

const { guardarDB, leerDB } = require("./helpers/guardarArchivo.js");
// const { showMenu, pausa } = require("./helpers/mensajes.js");
const {
  inquirerMenu,
  pausa,
  leerInput,
  listadoTareasBorrar,
  confirmar,
  mostrarListadoCheckList,
} = require("./helpers/inquirer.js");
const Tareas = require("./models/tareas");

const main = async () => {
  let opt = "";
  const tareas = new Tareas();

  const tareasDB = leerDB();

  if (tareasDB) {
    tareas.cargarTareasArray(tareasDB);
  }

  do {
    //Function -- imprime menú
    opt = await inquirerMenu();

    switch (opt) {
      case "1":
        const desc = await leerInput("Descripcion:");
        tareas.crearTarea(desc);
        break;
      case "2": // Listar Completadas | Pendientes
        tareas.listadoCompletado();
        break;
      case "3": //Listar completadas
        tareas.listarPendientesCompletadas(true);
        break;
      case "4": //Listar Pendientes
        tareas.listarPendientesCompletadas(false);
        break;
      case "5": //Completado | Pendientes
        const ids = await mostrarListadoCheckList(tareas.listadoArr);
        tareas.toggleCompletadas(ids);
        break;
      case "6": //Borrar
        const id = await listadoTareasBorrar(tareas.listadoArr);
        if (id !== "0") {
          const confir = await confirmar("¿Está seguro?");
          if (confir) {
            tareas.borrarTarea(id);
            console.log("Tarea borrada correctamente".green);
          }
        }

        break;
      default:
        break;
    }

    guardarDB(tareas.listadoArr);

    await pausa();
  } while (opt !== "0");
};

main();
