/** @format */

const Role = require("../models/role");
const Usuario = require("../models/usuario");

const isRolValidate = async (rol = "") => {
  const existRol = await Role.findOne({ rol });
  if (!existRol) throw new Error(`El rol: ${rol} no está registrado.`);
};

const verifyEmail = async (correo = "") => {
  const email = await Usuario.findOne({ correo });
  if (email) {
    throw new Error(`El e-mail ${correo} ya se encuentrá registrado..`);
  }
};

module.exports = {
  isRolValidate,
  verifyEmail,
};
