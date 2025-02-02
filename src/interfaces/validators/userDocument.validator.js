class UserDocumentValidator {
  static validateCreate(data) {
    const errors = [];
    if (!data.file || typeof data.file !== "object") {
      errors.push("File object is required.");
    } else {
      if (!data.file.filename || typeof data.file.filename !== "string") {
        errors.push("Filename is required and must be a string.");
      }
      if (!data.file.content || typeof data.file.content !== "string") {
        errors.push("File content is required and must be a base64 string.");
      }
      if (!data.file.content.startsWith("data:")) {
        errors.push("File content must be a valid base64 data URI.");
      }
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
    if (data.file) {
      if (typeof data.file !== "object") {
        errors.push("File must be an object.");
      } else {
        if (data.file.filename && typeof data.file.filename !== "string") {
          errors.push("Filename must be a string.");
        }
        if (data.file.content && typeof data.file.content !== "string") {
          errors.push("File content must be a base64 string.");
        }
        if (data.file.content && !data.file.content.startsWith("data:")) {
          errors.push("File content must be a valid base64 data URI.");
        }
      }
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
