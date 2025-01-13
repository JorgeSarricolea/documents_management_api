class UserDocumentValidator {
  static validateCreate(data) {
    const errors = [];
    if (!data.path || typeof data.path !== "string") {
      errors.push("Path is required and must be a string.");
    }
    if (!data.document_info_id || typeof data.document_info_id !== "string") {
      errors.push("Document info ID is required and must be a string.");
    }
    if (!data.user_id || typeof data.user_id !== "string") {
      errors.push("User ID is required and must be a string.");
    }
    return errors;
  }

  static validateUpdate(data) {
    const errors = [];
    if (data.path && typeof data.path !== "string") {
      errors.push("Path must be a string.");
    }
    if (data.document_info_id && typeof data.document_info_id !== "string") {
      errors.push("Document info ID must be a string.");
    }
    if (data.user_id && typeof data.user_id !== "string") {
      errors.push("User ID must be a string.");
    }
    return errors;
  }
}

export default UserDocumentValidator;
