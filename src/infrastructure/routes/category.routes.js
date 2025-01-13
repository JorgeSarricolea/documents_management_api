import express from "express";
import CategoryController from "../../interfaces/controllers/category.controller.js";
import CategoryService from "../../application/services/category.service.js";
import CategoryRepository from "../../domain/repositories/category.repository.js";
import prisma from "../../adapters/database/orm/prisma.js";

const router = express.Router();

const categoryRepository = new CategoryRepository(prisma);
const categoryService = new CategoryService(categoryRepository);
const categoryController = new CategoryController(categoryService);

router.get("/", (req, res) => categoryController.getAllCategories(req, res));
router.get("/:id", (req, res) => categoryController.getCategoryById(req, res));
router.post("/", (req, res) => categoryController.createCategory(req, res));
router.put("/:id", (req, res) => categoryController.updateCategory(req, res));
router.delete("/:id", (req, res) =>
  categoryController.deleteCategory(req, res)
);

export default router;
