/** @format */

const path = require("path");

const CargarArchivo = (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0 || !req.files.archivo) {
    res.status(400).json({ msg: "No hay archivos en la peticion" });
    return;
  }

  console.log("req.files >>>", req.files); // eslint-disable-line

  const { archivo } = req.files;

  const uploadPath = path.join(__dirname, "../uploads/" + archivo.name);

  archivo.mv(uploadPath, (err) => {
    if (err) {
      return res.status(500).json({ err });
    }

    res.json({ msg: `archivo guardado en la ruta ${uploadPath}` });
  });
};

module.exports = {
  CargarArchivo,
};
