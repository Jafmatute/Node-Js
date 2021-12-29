/** @format */

const url = window.location.hostname.includes("localhost")
  ? "http://localhost:8081/api/auth/"
  : "https://restsnode.herokuapp.com/api/auth/";

let usuario = null;
let socket = null;

// Referencias HTML
const txtUid = document.querySelector("#txtUid");
const txtMensaje = document.querySelector("#txtMensaje");
const ulUsuarios = document.querySelector("#ulUsuarios");
const ulMensajes = document.querySelector("#ulMensajes");
const btnSalir = document.querySelector("#btnSalir");

const validarJWT = async () => {
  const token = localStorage.getItem("token") || "";

  if (token.length <= 10) {
    window.location = "index.html";
    throw new Error("No hay token en la petición");
  }

  const resp = await fetch(url, {
    headers: { "x-token": token },
  });

  const { usuario: userDB, token: tokenDB } = await resp.json();
  localStorage.setItem("token", tokenDB);
  usuario = userDB;
  document.title = usuario.nombre;

  await conectarSocket();
};

const conectarSocket = async () => {
  socket = io({
    extraHeaders: {
      "x-token": localStorage.getItem("token"),
    },
  });

  socket.on("connect", () => {
    console.log("socket online");
  });

  socket.on("disconnect", () => {
    console.log("socket ofline");
  });

  socket.on("recibir-mensajes", () => {
    // TODO:
  });

  socket.on("usuarios-activos", dibujarUsuarios);

  socket.on("mensaje-privado", () => {
    // TODO:
  });
};

const dibujarUsuarios = (usuarios = []) => {
  let userHTML = "";
  usuarios.forEach(({ nombre, uid }) => {
    userHTML += `
    <li> <p> <h5 class="text-success"> ${nombre} </h5> </p> </li>
    <span class="fs-6 text-muted">${uid}</span>
    `;
  });

  ulUsuarios.innerHTML = userHTML;
};

const main = async () => {
  await validarJWT();
};

main();

// const socket = io();
