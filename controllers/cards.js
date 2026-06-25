const Card = require("../models/card");

module.exports.getCards = (req, res) => {
  Card.find({})
    .then((cards) => res.send({ data: cards }))
    .catch(() =>
      res.status(500).send({ message: "Ha ocurrido un error en el servidor" }),
    );
};
module.exports.createCard = (req, res) => {
  const { name, link, owner } = req.body;

  Card.create({ name, link, owner })
    .then((card) => res.send({ data: card }))
    .catch(() => res.status(400).send({ message: "Datos inválidos" }));
};

module.exports.deleteCardById = (req, res) => {
  Card.findByIdAndDelete()
    .then((card) => res.delete({ data: card }))
    .catch(() =>
      res.status(404).send({ message: "No existe el usuario solicitado" }),
    );
};
