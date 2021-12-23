/** @format */

const fs = require("fs");
const path = require("path");
const { subirArchivo } = require("../helpers/");
const { Usuario, Producto } = require("../models/");

const cargarArchivo = async (req, res) => {
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

actualizarImagen = async (req, res) => {
  const { id, coleccion } = req.params;

  let modelo;

  switch (coleccion) {
    case "usuarios":
      modelo = await Usuario.findById(id);
      if (!modelo)
        return res
          .status(400)
          .json({ msg: `Nop existe el usuario con el id ${id}` });
      break;
    case "productos":
      modelo = await Producto.findById(id);
      if (!modelo)
        return res
          .status(400)
          .json({ msg: `No existe el producto con el id ${id}` });
      break;

    default:
      return res.status(500).json({ msg: "Se me olvido validar esto" });
      break;
  }

  //Limpiar imagenes previas

  if (modelo.imagen) {
    //Hay que borrar la imagen del servido5r
    const pathImg = path.join(
      __dirname,
      "../uploads",
      coleccion,
      modelo.imagen
    );
    if (fs.existsSync(pathImg)) {
      fs.unlinkSync(pathImg);
    }
  }

  const nombre = await subirArchivo(req.files, undefined, coleccion);
  modelo.imagen = nombre;
  await modelo.save();

  res.json(modelo);
};

module.exports = {
  actualizarImagen,
  cargarArchivo,
};
