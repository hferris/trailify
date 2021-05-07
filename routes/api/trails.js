const router = require("express").Router();
const parkController = require("../../controllers/parkController");

// Matches with "/api/posts"
router
  .route("/")

  .post(parkController.create);

// Matches with "/api/posts/:id"
// router.route("/:id").delete(trailController.remove);

module.exports = router;