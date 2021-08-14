/** @format */

console.log("Inicio del programa.."); //1

setTimeout(() => {
  console.log("Primer timeOunt"); //5
}, 3000);

setTimeout(() => {
  console.log("Segundo timeOunt"); //3
}, 0);

setTimeout(() => {
  console.log("Tercer timeOunt"); //4
}, 0);

console.log("Fin programa"); //2
