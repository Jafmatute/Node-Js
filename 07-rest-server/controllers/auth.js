/** @format */

const { response } = require("express");

const login = (req, res = response) => {
  const body = req.body;
  res.json({
    msg: "login",
    body,
  });
};

module.exports = {
  login,
};
