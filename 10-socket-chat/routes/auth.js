/** @format */

const { Router } = require("express");
const { check } = require("express-validator");

const { validarCampos } = require("../Middlewares/");

//Controllers
const { login, googleSignIn, renovarToken } = require("../controllers/auth");
const { validarJWT } = require("../Middlewares");

const router = Router();

router.post(
  "/login",
  [
    check("correo", "El e-mail es obligatorio").isEmail(),
    check("password", "La contraseña es obligatoria").not().isEmpty(),
    validarCampos,
  ],
  login
);

router.post(
  "/google",
  [check("id_token", "El token de google es obligatorio"), validarCampos],
  googleSignIn
);

router.get("/", validarJWT, renovarToken);

module.exports = router;
