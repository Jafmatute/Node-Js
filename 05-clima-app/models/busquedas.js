/** @format */
const axios = require("axios");

class Busquedas {
  historial = ["Tegucigalpa", "Madrid", "San Jose"];

  constructor() {
    // TODO: Leer DB si existe!
  }

  get paramsMapBox() {
    return {
      access_token: process.env.MAPBOX_KEY || null,
      limit: 2,
      lenguage: "es",
    };
  }

  async ciudad(lugar = "") {
    // TODO: Petición Http

    const instace = axios.create({
      baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json`,
      params: this.paramsMapBox,
    });

    const rsp = await instace.get();
    console.log(rsp.data);
    return [];
  }
}

module.exports = Busquedas;
