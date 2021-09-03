/** @format */

const { Router } = require("express");
const { check } = require("express-validator");

const { validarCampos } = require("../Middlewares/validator-campos");

const router = Router();

//Obtener todas las categorías
router.get("/", (req, res) => {
  res.status(200).json({ msg: "todo ok" });
});

//Obtener una categoría por ID(Unica)
router.get("/:id", (req, res) => {
  const { id } = req.params;
  res.status(200).json({ msg: "id categoria todo ok", id });
});

// Crear categoría privado - cualquier persona con un token válido.
router.post("/", (req, res) => {
  res.status(200).json({ msg: "post todo ok" });
});

//Actualizar por id, privado cualquier persona con token válido.
router.put("/:id", (req, res) => {
  res.status(200).json({ msg: "put todo ok" });
});

//borrar categoría  -- cambiar su estado*
router.delete("/:id", (req, res) => {
  res.status(200).json({ msg: "delete todo ok" });
});

module.exports = router;
