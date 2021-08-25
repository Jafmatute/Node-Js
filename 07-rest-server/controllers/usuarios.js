/** @format */
const { response, request } = require("express");
const Usuario = require("../models/usuario");
//Callback usuarios

const usuariosGet = (req = request, res = response) => {
  const { q, page = 1, limit = 10 } = req.query;
  res.json({
    message: "get api - Controlador",
    page,
    limit,
  });
};

const usuariosPost = async (req, res = response) => {
  const body = req.body;

  const usuario = new Usuario(body);

  //Grabar registro
  await usuario.save();

  res.status(201).json({
    message: "post api - Controlador",
    usuario,
  });
};

const usuariosPut = (req, res = response) => {
  const { id } = req.params;
  res.json({
    message: "put api - Controlador",
    id,
  });
};

const usuariosPatch = (req, res = response) => {
  res.json({
    message: "patch api - Controlador",
  });
};

const usuariosDelete = (req, res = response) => {
  res.json({
    message: "delete api - Controlador",
  });
};

module.exports = {
  usuariosGet,
  usuariosPost,
  usuariosPut,
  usuariosPatch,
  usuariosDelete,
};
