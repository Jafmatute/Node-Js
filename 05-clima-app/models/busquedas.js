/** @format */
const fs = require("fs");
const axios = require("axios");

class Busquedas {
  historial = [];
  dbPath = "./db/database.json";
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

  get paramsWeather() {
    return {
      appid: process.env.OPENWEATHER_KEY,
      units: "metric",
      lang: "es",
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

  async climaLugar(lat, lon) {
    try {
      //instancia
      const instace = axios.create({
        baseURL: "https://api.openweathermap.org/data/2.5/weather",
        params: { ...this.paramsWeather, lat, lon },
      });

      // return
      const rsp = await instace.get();
      const { weather, main } = rsp.data;
      return {
        descripcion: weather[0].description,
        temp: main.temp,
        min: main.temp_min,
        max: main.temp_max,
      };
    } catch (error) {
      console.log(error);
    }
  }

  agregarHistorial(lugar = "") {
    if (this.historial.includes(lugar.toLocaleLowerCase())) {
      return;
    }

    this.historial.unshift(lugar.toLocaleLowerCase());

    //Grabar en db
    this.guardarDB();
  }

  guardarDB() {
    const payload = {
      historial: this.historial,
    };
    fs.writeFileSync(this.dbPath, JSON.stringify(payload));
  }

  leerDB() {}
}

module.exports = Busquedas;
