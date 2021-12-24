/** @format */

//HTML
const lblOnline = document.querySelector("#lblOnline");
const lblOfline = document.querySelector("#lblOfline");

const socket = io();

socket.on("connect", () => {
  console.log("conectado...");

  lblOfline.style.display = "none";
  lblOnline.style.display = "";
});

socket.on("disconnect", () => {
  lblOnline.style.display = "none";
  lblOfline.style.display = "";
  console.log("Desconectado del servidor");
});
