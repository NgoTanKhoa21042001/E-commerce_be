const express = require("express");
const app = express();
app.use(express.json());

// route import

const product = require("./routes/ProductRoute");

app.use("/api/v2", product);
module.exports = app;