class DocumentInfoService {
  constructor(documentInfoRepository) {
    this.documentInfoRepository = documentInfoRepository;
  }

  async getAllDocumentInfos() {
    return await this.documentInfoRepository.getAll();
  }

  async getDocumentInfoById(document_info_id) {
    return await this.documentInfoRepository.getById(document_info_id);
  }

  async createDocumentInfo(data) {
    return await this.documentInfoRepository.create(data);
  }

  async updateDocumentInfo(document_info_id, data) {
    return await this.documentInfoRepository.update(document_info_id, data);
  }

  async deleteDocumentInfo(document_info_id) {
    return await this.documentInfoRepository.delete(document_info_id);
  }
}

export default DocumentInfoService;
