const router = require("express").Router();


// Matches with "/api/posts"
router
  .route("/")

  .post(bookController.create);

// Matches with "/api/posts/:id"
router.route("/:id").delete(weatherController.remove);

module.exports = router;