/** @format */

const fs = require("fs");

const guardarDB = (data) => {
  //ruta para alamacenar la información
  const archivo = "./db/data.json";

  //grabar a información
  fs.writeFileSync(archivo, JSON.stringify(data));
};

module.exports = {
  guardarDB,
};
