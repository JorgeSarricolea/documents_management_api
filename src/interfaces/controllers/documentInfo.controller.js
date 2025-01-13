import DocumentInfoValidator from "../validators/documentInfo.validator.js";
import DocumentInfoPresenter from "../presenters/documentInfo.presenter.js";

class DocumentInfoController {
  constructor(documentInfoService) {
    this.documentInfoService = documentInfoService;
  }

  async getAllDocumentInfos(req, res) {
    try {
      const documentInfos =
        await this.documentInfoService.getAllDocumentInfos();
      res.status(200).json(DocumentInfoPresenter.formatList(documentInfos));
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getDocumentInfoById(req, res) {
    try {
      const { id } = req.params;
      const documentInfo = await this.documentInfoService.getDocumentInfoById(
        id
      );
      if (!documentInfo) {
        return res.status(404).json({ message: "DocumentInfo not found" });
      }
      res.status(200).json(DocumentInfoPresenter.format(documentInfo));
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async createDocumentInfo(req, res) {
    try {
      const data = req.body;
      const errors = DocumentInfoValidator.validateCreate(data);
      if (errors.length > 0) {
        return res.status(400).json({ errors });
      }
      const newDocumentInfo = await this.documentInfoService.createDocumentInfo(
        data
      );
      res.status(201).json(DocumentInfoPresenter.format(newDocumentInfo));
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async updateDocumentInfo(req, res) {
    try {
      const { id } = req.params;
      const data = req.body;
      const errors = DocumentInfoValidator.validateUpdate(data);
      if (errors.length > 0) {
        return res.status(400).json({ errors });
      }
      const updatedDocumentInfo =
        await this.documentInfoService.updateDocumentInfo(id, data);
      res.status(200).json(DocumentInfoPresenter.format(updatedDocumentInfo));
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async deleteDocumentInfo(req, res) {
    try {
      const { id } = req.params;
      await this.documentInfoService.deleteDocumentInfo(id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default DocumentInfoController;
