const express = require("express");
const mongoose = require("mongoose");
const fs = require("fs");
const app = express();
const PORT = 3000;
const usersRouter = require("./routes/users");
const cardsRouter = require("./routes/cards");

mongoose
  .connect("mongodb://localhost:27017/aroundb")
  .then(() => {
    console.log("Conectado a MongoDB");
  })
  .catch((err) => {
    console.error("Error al conectar a MongoDB:", err);
  });

app.use("/users", usersRouter);
app.use("/cards", cardsRouter);
/*
app.get("/users", (req, res) => {
  fs.readFile("./data/users.json", "utf8", (err, data) => {
    if (err) {
      console.log(err);
    }

    const users = JSON.parse(data);
    res.json(users);
  });
});
app.get("/cards", (req, res) => {
  fs.readFile("./data/cards.json", "utf8", (err, data) => {
    if (err) {
      console.log(err);
    }
    const cards = JSON.parse(data);
    res.json(cards);
  });
});
app.get("/users/:id", (req, res) => {
  fs.readFile("./data/users.json", "utf8", (err, data) => {
    if (err) {
      console.log(err);
    }

    const users = JSON.parse(data);
    const user = users.find((user) => user._id === req.params.id);

    if (!user) {
      return res.status(404).json({
        message: "ID de usuario no encontrado",
      });
    }

    res.json(user);
  });
});*/

app.use((req, res) => {
  res.status(404).send({ message: "Recurso solicitado no encontrado" });
});

app.listen(PORT, () => {
  console.log(`servidor corriendo http://localhost:${PORT}`);
});
