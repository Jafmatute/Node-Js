/** @format */

const http = require("http");

http
  .createServer((req, res) => {
    // res.writeHead(200, { "Content-Type": "text/plain" });
    // res.writeHead(200, { "Content-Type": "application/json" });
    res.setHeader("Content-Disposition", "attachment; filename=lista.csv");
    res.writeHead(200, { "Content-Type": "application/CSV" });

    const persona = {
      id: 1,
      nombre: "Josue",
    };

    // res.write(JSON.stringify(persona));

    res.write("ID, nombre\n");
    res.write("1, Maria\n");
    res.write("2, Paola\n");
    res.write("3, Francis\n");

    res.end();
  })
  .listen(8080);

console.log("Escuchando en el puerto", 8080);
