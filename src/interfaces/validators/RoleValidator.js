class RoleValidator {
  static validateCreate(data) {
    const errors = [];
    if (!data.name || typeof data.name !== "string") {
      errors.push("Role name is required and must be a string.");
    }
    return errors;
  }

  static validateUpdate(data) {
    const errors = [];
    if (data.name && typeof data.name !== "string") {
      errors.push("Role name must be a string.");
    }
    return errors;
  }
}

export default RoleValidator;
