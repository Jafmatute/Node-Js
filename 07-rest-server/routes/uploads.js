/** @format */

const { Router } = require("express");
const { check } = require("express-validator");
const { CargarArchivo } = require("../controllers/uploads");

const { validarCampos } = require("../Middlewares/validator-campos");

const router = Router();

router.post("/", CargarArchivo);

module.exports = router;
