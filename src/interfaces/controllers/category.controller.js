import CategoryValidator from "../validators/category.validator.js";
import CategoryPresenter from "../presenters/category.presenter.js";

class CategoryController {
  constructor(categoryService) {
    this.categoryService = categoryService;
  }

  async getAllCategories(req, res) {
    try {
      const categories = await this.categoryService.getAllCategories();
      res.status(200).json(CategoryPresenter.formatList(categories));
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getCategoryById(req, res) {
    try {
      const { id } = req.params;
      const category = await this.categoryService.getCategoryById(id);
      if (!category) {
        return res.status(404).json({ message: "Category not found" });
      }
      res.status(200).json(CategoryPresenter.format(category));
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async createCategory(req, res) {
    try {
      const data = req.body;
      const errors = CategoryValidator.validateCreate(data);
      if (errors.length > 0) {
        return res.status(400).json({ errors });
      }
      const newCategory = await this.categoryService.createCategory(data);
      res.status(201).json(CategoryPresenter.format(newCategory));
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async updateCategory(req, res) {
    try {
      const { id } = req.params;
      const data = req.body;
      const errors = CategoryValidator.validateUpdate(data);
      if (errors.length > 0) {
        return res.status(400).json({ errors });
      }
      const updatedCategory = await this.categoryService.updateCategory(
        id,
        data
      );
      res.status(200).json(CategoryPresenter.format(updatedCategory));
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async deleteCategory(req, res) {
    try {
      const { id } = req.params;
      await this.categoryService.deleteCategory(id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default CategoryController;
