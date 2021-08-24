/** @format */
const { response } = require("express");

//Callback usuarios

const usuariosGet = (req, res = response) => {
  res.json({
    message: "get api - Controlador",
  });
};

const usuariosPost = (req, res = response) => {
  res.status(201).json({
    message: "post api - Controlador",
  });
};

const usuariosPut = (req, res = response) => {
  res.json({
    message: "put api - Controlador",
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
