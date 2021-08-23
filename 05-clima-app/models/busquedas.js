/** @format */
const axios = require("axios");

class Busquedas {
  historial = ["Tegucigalpa", "Madrid", "San Jose"];

  constructor() {
    // TODO: Leer DB si existe!
  }

  async ciudad(lugar = "") {
    // TODO: Petición Http
    try {
      const resp = await axios(`https://reqres.in/api/users?page=2`);
      console.log("users", resp.data);

      return []; // retornar la búsqueda ciudad
    } catch (error) {
      console.log(error);

      return [];
    }
  }
}

module.exports = Busquedas;
