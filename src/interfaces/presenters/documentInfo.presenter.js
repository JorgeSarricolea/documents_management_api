class DocumentInfoPresenter {
  static format(documentInfo) {
    return {
      id: documentInfo.document_info_id,
      name: documentInfo.name,
      description: documentInfo.description,
      category: documentInfo.category
        ? {
          id: documentInfo.category.category_id,
          name: documentInfo.category.name,
        }
        : null,
    };
  }

  static formatList(documentInfos) {
    return documentInfos.map(this.format);
  }
}

export default DocumentInfoPresenter;
