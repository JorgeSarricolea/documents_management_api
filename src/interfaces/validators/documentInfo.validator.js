class DocumentInfoValidator {
  static validateCreate(data) {
    const errors = [];
    if (!data.name || typeof data.name !== "string") {
      errors.push("DocumentInfo name is required and must be a string.");
    }
    if (!data.description || typeof data.description !== "string") {
      errors.push("Description is required and must be a string.");
    }
    if (!data.category_id || typeof data.category_id !== "string") {
      errors.push("Category ID is required and must be a string.");
    }
    return errors;
  }

  static validateUpdate(data) {
    const errors = [];
    if (data.name && typeof data.name !== "string") {
      errors.push("DocumentInfo name must be a string.");
    }
    if (data.description && typeof data.description !== "string") {
      errors.push("Description must be a string.");
    }
    if (data.category_id && typeof data.category_id !== "string") {
      errors.push("Category ID must be a string.");
    }
    return errors;
  }
}

export default DocumentInfoValidator;
