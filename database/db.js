const mongoose = require("mongoose");

const connectToDb = () => {
  mongoose
    .connect(
      "mongodb+srv://guilherme:GkZSJtRt5nbUuGgf@cluster0.m8wge.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    )
    .then(() => console.log("MongoDB atlas CONECTADO!"))
    .catch((err) => console.log("Erro ao conectar ao MongoDB:", err));
};

module.exports = connectToDb;
