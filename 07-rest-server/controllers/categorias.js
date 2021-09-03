/** @format */

const { Categoria } = require("../models/");

const getCategorias = (req, res) => {
  res.json({ msg: "pk" });
};

const crearCategoria = async (req, res) => {
  const nombre = req.body.nombre.toUpperCase();

  const categoriaDB = await Categoria.findOne({ nombre });

  if (categoriaDB) 
  return res
    .status(400)
    .json({ msg: `La categoria: ${nombre} ya existe en el sistema` });

  //Generar la información a guardar

  const data = {
    nombre,
    usuario: req.usuario._id,
  };

  const categoria = new Categoria(data);

  //Guardar DB
  await categoria.save();

  res.status(201).json(categoria);
};

module.exports = {
  crearCategoria,
};
