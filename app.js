const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 3000;
const usersRouter = require("./routes/users");
const cardsRouter = require("./routes/cards");
app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/aroundb")
  .then(() => {
    console.log("Conectado a MongoDB");
  })
  .catch((err) => {
    console.error("Error al conectar a MongoDB:", err);
  });

app.use((req, res, next) => {
  req.user = {
    _id: "5d8b8592978f8bd833ca8133", // pega el _id del usuario de prueba que creamos en el paso anterior
  };

  next();
});

app.use("/users", usersRouter);
app.use("/cards", cardsRouter);

app.listen(PORT, () => {
  console.log(`servidor corriendo http://localhost:${PORT}`);
});
