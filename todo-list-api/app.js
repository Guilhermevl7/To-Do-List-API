const express = require("express");
const app = express();
const connectToDb = require("./database/db");

connectToDb();
const port = 3000;

app.use(express.json());

app.listen(port, () => console.log("Servidor online!"));
