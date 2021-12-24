/** @format */

//HTML
const lblOnline = document.querySelector("#lblOnline");
const lblOfline = document.querySelector("#lblOfline");
const txtMensaje = document.querySelector("#txtMensaje");
const btnEnviar = document.querySelector("#btnEnviar");

const socket = io();

socket.on("connect", () => {
  lblOfline.style.display = "none";
  lblOnline.style.display = "";
});

socket.on("disconnect", () => {
  lblOnline.style.display = "none";
  lblOfline.style.display = "";
});

socket.on("enviar-mensaje", (payload) => {
  console.log("desde el servidor", payload);
});

btnEnviar.addEventListener("click", () => {
  const mensaje = txtMensaje.value;

  const payload = {
    mensaje,
    id: "12323",
    fecha: new Date(),
  };

  socket.emit("enviar-mensaje", payload, (id) => {
    console.log("desde el servidor", id);
  });
});
