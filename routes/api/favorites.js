const router = require("express").Router();
const favoritesController = require("../../controllers/favoritesController");

// Matches with "/api/posts"
router
  .route("/api/favorites")
  .get(favoritesController.findAll)
  .post(favoritesController.create)
  .delete(favoritesController.delete);

module.exports = router;