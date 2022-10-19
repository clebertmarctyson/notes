const asyncHandler = require("express-async-handler");
const Category = require("../models/category");

const getCategories = asyncHandler(async (req, res) => {
  const categories = await Category.find();
  res.status(200).send(categories);
});

const createCategory = asyncHandler(async (req, res) => {
  const { name } = req.body;

  if (!name) {
    res.status(400);
    throw new Error("Name field is required");
  }

  const category = await Category.create({ name });
  res.status(201).json(category);
});

const getCategory = asyncHandler(async (req, res) => {
  res.status(200).send({ message: "Get A Category" });
});

const updateCategory = asyncHandler(async (req, res) => {
  res.status(200).send({ message: "Update A Category" });
});

const removeCategory = asyncHandler(async (req, res) => {
  res.status(200).send({ message: "Delete A Category" });
});

module.exports = {
  getCategories,
  createCategory,
  getCategory,
  updateCategory,
  removeCategory
};
