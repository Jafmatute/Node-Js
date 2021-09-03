/** @format */

const { response } = require("express");
const bcryptjs = require("bcryptjs");

const Usuario = require("../models/usuario");
const { generarJWT } = require("../helpers/jwt");
const { googleVerify } = require("../helpers/google-verify");

const login = async (req, res = response) => {
  const { correo, password } = req.body;

  try {
    // Verificar si el e-mail existe
    const usuario = await Usuario.findOne({ correo });
    if (!usuario) {
      return res
        .status(400)
        .json({ msg: "Usuario / Password no son correctos " });
    }
    // Verificar usuario activo
    if (!usuario.estado) {
      return res
        .status(400)
        .json({ msg: "Usuario sin permisos, contacté con el administrador " });
    }

    // Verificar la contraseña
    const verifyPass = bcryptjs.compareSync(password, usuario.password);
    if (!verifyPass) {
      return res
        .status(400)
        .json({ msg: "Usuario / Password no son correctos " });
    }

    //gener el JWT
    const token = await generarJWT(usuario.id);

    res.json({
      usuario,
      token,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ msg: "Hubo un error inesperado intente nuevamante" });
  }
};

const googleSignIn = async (req, res = response) => {
  const { id_token } = req.body;

  try {
    const googleUser = await googleVerify(id_token);
    console.log(googleUser);
    res.json({ msg: "Autenticación lista, google", googleUser });
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: "Token de google no es válido" });
  }
};

module.exports = {
  login,
  googleSignIn,
};
