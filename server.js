const express = require("express");

const app = require("./app");
require("./db/Database");
const dotenv = require("dotenv");
// config
dotenv.config({
  path: ".env",
});
// create server

const server = app.listen(process.env.PORT, () => {
  console.log(`Servier is listening on ${process.env.PORT}`);
});
