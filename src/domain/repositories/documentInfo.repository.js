class DocumentInfoRepository {
  constructor(database) {
    this.database = database;
  }

  async getAll() {
    return this.database.documentInfo.findMany({
      include: {
        category: true, // Incluye la categoría relacionada
      },
    });
  }

  async getById(document_info_id) {
    return this.database.documentInfo.findUnique({
      where: { document_info_id },
      include: {
        category: true, // Incluye la categoría relacionada
      },
    });
  }

  async create(data) {
    return this.database.documentInfo.create({
      data,
      include: {
        category: true,
      },
    });
  }

  async update(document_info_id, data) {
    return this.database.documentInfo.update({
      where: { document_info_id },
      data,
      include: {
        category: true,
      },
    });
  }

  async delete(document_info_id) {
    return this.database.documentInfo.delete({
      where: { document_info_id },
    });
  }
}

export default DocumentInfoRepository;
