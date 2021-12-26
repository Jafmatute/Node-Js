/** @format */

//Referencias HTML
const lblEscritorio = document.querySelector("h1");
const btnAtender = document.querySelector("button");
const lblTicket = document.querySelector("small");
const divlerta = document.querySelector(".alert");
const lblPendientes = document.querySelector("#lblPendientes");

const searchParams = new URLSearchParams(window.location.search);

if (!searchParams.has("escritorio")) {
  window.location = "index.html";
  throw new Error("El escritorio es obligatorio");
}

const escritorio = searchParams.get("escritorio");
lblEscritorio.innerHTML = escritorio;

divlerta.style.display = "none";

const socket = io();

socket.on("connect", () => {
  btnAtender.disabled = false;
});

socket.on("disconnect", () => {
  btnAtender.disabled = true;
});

socket.on("tickets-pendientes", (pendientes) => {
  if (pendientes === 0) {
    lblPendientes.style.display = "none";
  } else {
    lblPendientes.innerText = pendientes;
    lblPendientes.style.display = "";
  }
});

btnAtender.addEventListener("click", () => {
  socket.emit("atender-ticket", { escritorio }, ({ ok, ticket }) => {
    if (!ok) {
      lblTicket.innerText = `NADIE`;
      return (divlerta.style.display = "");
    }

    lblTicket.innerText = `Ticket ${ticket.numero}`;
  });
});
