const Card = require("../models/card");

module.exports.getCards = (req, res) => {
  Card.find({})
    .orFail()
    .then((cards) => res.send({ data: cards }))
    .catch(() =>
      res.status(500).send({ message: "Ha ocurrido un error en el servidor" }),
    );
};
module.exports.createCard = (req, res) => {
  console.log(req.body);
  const { name, link } = req.body;

  Card.create({ name, link, owner: req.user._id })
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

module.exports.likeCard = (req, res) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $addToSet: { likes: req.user._id } }, // agrega _id al array si aún no está ahí
    { new: true },
  )
    .then((card) => {
      if (!card) {
        return res.status(404).send({ message: "No existe el usuario" });
      }
      return res.send({ data: card });
    })
    .catch(() =>
      res.status(404).send({ message: "No existe el usuario solicitado" }),
    );
};
module.exports.dislikeCard = (req, res) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $pull: { likes: req.user._id } }, // elimina _id del array
    { new: true },
  )
    .then((card) => {
      if (!card) {
        return res.status(404).send({ message: "No existe el usuario" });
      }
      return res.send({ data: card });
    })
    .catch(() =>
      res.status(404).send({ message: "No existe el usuario solicitado" }),
    );
};
