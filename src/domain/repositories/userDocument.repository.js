class UserDocumentRepository {
  constructor(database) {
    this.database = database;
  }

  async getAll() {
    return this.database.userDocument.findMany({
      include: {
        document_info: true,
        user: true,
      },
    });
  }

  async getById(user_document_id) {
    return this.database.userDocument.findUnique({
      where: { user_document_id },
      include: {
        document_info: true,
        user: true,
      },
    });
  }

  async create(data) {
    return this.database.userDocument.create({
      data,
      include: {
        document_info: true,
        user: true,
      },
    });
  }

  async update(user_document_id, data) {
    return this.database.userDocument.update({
      where: { user_document_id },
      data,
      include: {
        document_info: true,
        user: true,
      },
    });
  }

  async delete(user_document_id) {
    return this.database.userDocument.delete({
      where: { user_document_id },
    });
  }
}

export default UserDocumentRepository;
