/**
 * {'uuid-12334444-55555-33': {id:12, desc:shshshs, compleadoEn: 12/32/12}}
 * @format */

const Tarea = require("./tarea");

class Tareas {
  _listado = {};

  constructor() {
    this._listado = {};
  }

  get listadoArr() {
    const listado = [];
    Object.keys(this._listado).forEach((key) => {
      const tarea = this._listado[key];
      listado.push(tarea);
    });

    return listado;
  }

  crearTarea(desc = "") {
    const tarea = new Tarea(desc);

    this._listado[tarea.id] = tarea;
  }

  cargarTareasArray(tareas = []) {
    tareas.forEach((tarea) => {
      this._listado[tarea.id] = tarea;
    });
  }

  listadoCompletado() {
    console.log();
    this.listadoArr.forEach((tarea, key) => {
      const idx = `${key + 1}`.green;
      const { desc, completadoEn } = tarea;
      const estado = completadoEn ? `Compleado`.green : `Pendiente`.red;

      console.log(`${idx} ${desc} :: ${estado}`);
    });
  }

  listarPendientesCompletadas(completada = true) {
    console.log();
    let contador = 0;
    this.listadoArr.forEach((tarea) => {
      const { desc, completadoEn } = tarea;
      const estado = completadoEn ? `Compleado`.green : `Pendiente`.red;

      if (completada) {
        if (completadoEn) {
          contador += 1;
          console.log(`${contador + ".".green} ${desc} :: ${completadoEn}`);
        }
      } else {
        if (!completadoEn) {
          contador += 1;
          console.log(`${contador + ".".green} ${desc} :: ${estado}`);
        }
      }
    });
  }
}

module.exports = Tareas;
