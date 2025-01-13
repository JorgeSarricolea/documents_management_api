class UserDocumentService {
  constructor(userDocumentRepository) {
    this.userDocumentRepository = userDocumentRepository;
  }

  async getAllUserDocuments() {
    return await this.userDocumentRepository.getAll();
  }

  async getUserDocumentById(user_document_id) {
    return await this.userDocumentRepository.getById(user_document_id);
  }

  async createUserDocument(data) {
    return await this.userDocumentRepository.create(data);
  }

  async updateUserDocument(user_document_id, data) {
    return await this.userDocumentRepository.update(user_document_id, data);
  }

  async deleteUserDocument(user_document_id) {
    return await this.userDocumentRepository.delete(user_document_id);
  }
}

export default UserDocumentService;
