/** @format */

const fs = require("fs");
const colors = require("colors");

const crearTBL = async (base = 5, lista, hasta) => {
  console.log("====================================".green);
  console.log("Tabla del".green, colors.blue(base));
  console.log("====================================".green);

  try {
    let salida = "";
    let consola = "";

    for (let i = 1; i <= hasta; i++) {
      salida += `${base} x ${i} = ${base * i}\n`;
      consola += `${base} ${"x".green} ${i} ${"=".green} ${base * i}\n`;
    }

    if (lista) {
      console.log(consola);
    }

    fs.writeFileSync(`tabla-${base}.txt`, salida);

    return `Tabla-${base}.text`;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  crearTBL,
};
