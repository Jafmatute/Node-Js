/** @format */

require("colors");
const readline = require("readline");

const showMenu = () => {
  console.log("====================================".green);
  console.log("Seleccione una opción".green);
  console.log("====================================\n".green);

  console.log(`${"1.".green} Crear tarea`);
  console.log(`${"2.".green} Listar tareas`);
  console.log(`${"3.".green} Listar tareas completadas`);
  console.log(`${"4.".green} Listar tareas pendientes`);
  console.log(`${"5.".green} Completar tarea(s)`);
  console.log(`${"6.".green} Borrar tarea`);
  console.log(`${"0.".green} Salir\n`);

  // Creando la interfaz
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  // Preguntando al usuario
  rl.question("Seleccione un opción:", (answer) => {
    // console.log(`Respuesta del usuario ${answer}`);
    rl.close();
  });
};

const pausa = () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question(`\nPresione ${"ENTER:".green} para continuar\n`, () =>
    rl.close()
  );
};

module.exports = {
  showMenu,
  pausa,
};
