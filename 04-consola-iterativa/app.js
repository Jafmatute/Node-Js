/** @format */

require("colors");
console.clear();

// const { showMenu, pausa } = require("./helpers/mensajes.js");
const { inquirerMenu, pausa } = require("./helpers/inquirer.js");
const Tareas = require("./models/tareas");
const main = async () => {
  let opt = "";

  do {
    opt = await inquirerMenu();
    console.log({ opt });

    await pausa();
    // if (opt !== "0") await pausa();
  } while (opt !== "0");
};

main();
