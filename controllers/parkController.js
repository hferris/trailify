const db = require("../models");
const jwt = require("jsonwebtoken")

// define methods for the parkController
module.exports = {
  findAll: function (req, res) {
    db.Park.find({})
      // .sort({ name })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    console.log("/api/parks/create", req.body)
    const auth = req.headers.authorization;
    console.log("auth:", auth)
    const token = auth.split(" ")[1]
    const userData = jwt.decode(token)
    console.log("user;", userData)
    const parkToSave = {
      ...req.body,
      user_id: userData.id
    }
    db.Park.create(parkToSave)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  delete: function (req, res) {
    db.Park.findById({ _id: req.params.id })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
