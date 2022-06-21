"use srict";
require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const cors = require("cors");
const router = require("./routes");

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(router);

app.listen(port, () => {
  console.log("This Application run in port : " + port);
});
