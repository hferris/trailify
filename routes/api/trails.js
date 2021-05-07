const router = require("express").Router();
const parkController = require("../../controllers/parkController");

// Matches with "/api/posts"
router
  .route("/api/parks")
  .get(parkController.findAll)
  .post(parkController.create);


module.exports = router;
