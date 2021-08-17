/** @format */

const fs = require("fs");

const crearTBL = async (base = 5, lista) => {
  console.log("====================================");
  console.log("Tabla del", base);
  console.log("====================================");

  try {
    let salida = "";

    for (let i = 1; i <= 10; i++) {
      salida += `${base} x ${i} = ${base * i}\n`;
    }

    if (lista) {
      console.log(salida);
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
