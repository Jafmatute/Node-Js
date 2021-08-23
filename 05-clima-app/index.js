/** @format */
require("colors");
console.clear();

const { inquirerMenu, pausa } = require("./helpers/inquirer");

const main = async () => {
  let opt = 0;

  do {
    opt = await inquirerMenu();
    switch (opt) {
      case 1:
        console.log("Selecciono la primera opción");
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
