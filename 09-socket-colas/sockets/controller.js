/** @format */

const TicketControl = require("../models/ticket-control");

const ticketControl = new TicketControl();

const socketController = (socket) => {
  socket.emit("ultimo-ticket", ticketControl.ultimo);

  socket.on("siguiente-ticket", (payload, callback) => {
    const siguiente = ticketControl.siguiente();
    callback(siguiente);

    //TODO: Notificar que hay un nuevo ticket pendiente por asignar
  });

  socket.on("atender-ticket", ({ escritorio }, callback) => {
    if (!escritorio) {
      return callback({
        ok: false,
        msg: "El escritorio es obligatorio",
      });
    }

    const ticket = ticketControl.atenderTicket(escritorio);

    //TODO: Notificar cambio en los ultimos4

    if (!ticket) {
      return callback({
        ok: false,
        msg: "Ya no hay tickets",
      });
    } else {
      return callback({
        ok: true,
        ticket,
      });
    }
  });
};

module.exports = {
  socketController,
};
