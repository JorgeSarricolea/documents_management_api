class CategoryService {
  constructor(categoryRepository) {
    this.categoryRepository = categoryRepository;
  }

  async getAllCategories() {
    return await this.categoryRepository.getAll();
  }

  async getCategoryById(category_id) {
    return await this.categoryRepository.getById(category_id);
  }

  async createCategory(data) {
    const name = data.name.toLowerCase();

    const existingCategory = await this.categoryRepository.findByName(name);
    if (existingCategory) {
      throw new Error(`A category with the name '${name}' already exists`);
    }

    return await this.categoryRepository.create({ ...data, name });
  }

  async updateCategory(category_id, data) {
    return await this.categoryRepository.update(category_id, data);
  }

  async deleteCategory(category_id) {
    return await this.categoryRepository.delete(category_id);
  }
}

export default CategoryService;
