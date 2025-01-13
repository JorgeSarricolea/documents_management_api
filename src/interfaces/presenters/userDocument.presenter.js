class UserDocumentPresenter {
  static format(userDocument) {
    return {
      id: userDocument.user_document_id,
      path: userDocument.path,
      uploadedAt: userDocument.uploaded_at,
      updatedAt: userDocument.updated_at,
      documentInfo: userDocument.document_info
        ? {
          id: userDocument.document_info.document_info_id,
          name: userDocument.document_info.name,
        }
        : null,
      user: userDocument.user
        ? {
          id: userDocument.user.user_id,
          name: `${userDocument.user.first_name} ${userDocument.user.last_name}`,
        }
        : null,
    };
  }

  static formatList(userDocuments) {
    return userDocuments.map(this.format);
  }
}

export default UserDocumentPresenter;
