class CategoryValidator {
  static validateCreate(data) {
    const errors = [];
    if (!data.name || typeof data.name !== "string") {
      errors.push("Category name is required and must be a string.");
    }
    return errors;
  }

  static validateUpdate(data) {
    const errors = [];
    if (data.name && typeof data.name !== "string") {
      errors.push("Category name must be a string.");
    }
    return errors;
  }
}

export default CategoryValidator;
