const router = require("express").Router();
const weatherController = require("../../controllers/weatherController");

// Matches with "/api/posts"
router
  .route("/")

  .post(bookController.create);

// Matches with "/api/posts/:id"
router.route("/:id").delete(weatherController.remove);

module.exports = router;