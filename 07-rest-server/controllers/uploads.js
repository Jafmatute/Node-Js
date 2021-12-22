/** @format */

const { subirArchivo } = require("../helpers/");

const CargarArchivo = async (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0 || !req.files.archivo) {
    res.status(400).json({ msg: "No hay archivos en la peticion" });
    return;
  }

  const nombre = await subirArchivo(req.files);

  res.json({ nombre });
};

module.exports = {
  CargarArchivo,
};
