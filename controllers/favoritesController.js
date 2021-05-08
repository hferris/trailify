const db = require("../models");

// define methods for the parkController
module.exports = {
  findAll: function (req, res) {
    //   search by logged in users id #
    db.Favorites.find(req.query)
      .sort({ name })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    //  req.body will contain park data
    // store user id with data
    db.Favorites.create(req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  delete: function (req, res) {
    db.Favorites.findById({ _id: req.params.id })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};