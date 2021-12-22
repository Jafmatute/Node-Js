/** @format */

const { subirArchivo } = require("../helpers/");

const CargarArchivo = async (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0 || !req.files.archivo) {
    res.status(400).json({ msg: "No hay archivos en la peticion" });
    return;
  }

  try {
    // const nombre = await subirArchivo(req.files, ["txt", "md"], "textos");
    const nombre = await subirArchivo(req.files, undefined, "imagenes");
    res.json({ nombre });
  } catch (msg) {
    console.log(msg);
    res.status(400).json({ msg });
  }
};

module.exports = {
  CargarArchivo,
};
