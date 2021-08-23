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
      limit: 5,
      lenguage: "es",
    };
  }

  async ciudad(lugar = "") {
    try {
      const instace = axios.create({
        baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json`,
        params: this.paramsMapBox,
      });

      const rsp = await instace.get();

      return rsp.data.features.map((lugar) => ({
        id: lugar.id,
        nombre: lugar.place_name,
        lng: lugar.center[0],
        lat: lugar.center[1],
      }));
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = Busquedas;
