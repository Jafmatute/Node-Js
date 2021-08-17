/** @format */

const deadPool = {
  nombre: "Wade",
  apellido: "Winston",
  poder: "Regenreción",
  getNombre() {
    return `${this.nombre} ${this.apellido}`;
  },
};

// const { nombre, apellido, poder } = deadPool;

// console.log(deadPool.getNombre());

function imprimirHeroe({ nombre, apellido, poder, edad = 50 }) {
  // const --> no permite modificar los valores--- nombre= 'Josue'
  console.log(nombre, apellido, poder, edad);
}

// imprimirHeroe(deadPool);
const heroes = ["DeadPool", "Superman", "Batman"];
const [h1, , h3] = heroes;
console.log(h1, h3);
