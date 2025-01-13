class CategoryRepository {
  constructor(database) {
    this.database = database;
  }

  async getAll() {
    return this.database.category.findMany();
  }

  async getById(category_id) {
    return this.database.category.findUnique({
      where: { category_id },
    });
  }

  async create(data) {
    return this.database.category.create({
      data,
    });
  }

  async update(category_id, data) {
    return this.database.category.update({
      where: { category_id },
      data,
    });
  }

  async delete(category_id) {
    return this.database.category.delete({
      where: { category_id },
    });
  }

  async findByName(name) {
    return this.database.category.findFirst({
      where: { name: name.toLowerCase() },
    });
  }
}

export default CategoryRepository;
