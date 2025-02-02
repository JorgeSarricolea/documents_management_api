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
    const documentData = {
      filename: data.file.filename,
      file_content: data.file.content,
      document_info_id: data.document_info_id,
      user_id: data.user_id,
    };

    return this.database.userDocument.create({
      data: documentData,
      include: {
        document_info: true,
        user: true,
      },
    });
  }

  async update(user_document_id, data) {
    const documentData = {};

    if (data.file) {
      if (data.file.filename) documentData.filename = data.file.filename;
      if (data.file.content) documentData.file_content = data.file.content;
    }
    if (data.document_info_id)
      documentData.document_info_id = data.document_info_id;
    if (data.user_id) documentData.user_id = data.user_id;

    return this.database.userDocument.update({
      where: { user_document_id },
      data: documentData,
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
