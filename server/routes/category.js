const express = require("express");
const {
  getCategories,
  createCategory,
  getCategory,
  removeCategory,
  updateCategory
} = require("../controllers/category");

const router = express.Router();

router.route("/").get(getCategories).post(createCategory);

router
  .route("/:id")
  .get(getCategory)
  .put(updateCategory)
  .delete(removeCategory);

module.exports = router;
