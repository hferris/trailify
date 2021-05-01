const router = require("express").Router();
const bookController = require("../../controllers/trailController");

// Matches with "/api/posts"
router
  .route("/")

  .post(trailController.create);

// Matches with "/api/posts/:id"
router.route("/:id").delete(trailController.remove);

module.exports = router;