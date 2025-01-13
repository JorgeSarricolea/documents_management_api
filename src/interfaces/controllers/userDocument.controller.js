import UserDocumentValidator from "../validators/userDocument.validator.js";
import UserDocumentPresenter from "../presenters/userDocument.presenter.js";

class UserDocumentController {
  constructor(userDocumentService) {
    this.userDocumentService = userDocumentService;
  }

  async getAllUserDocuments(req, res) {
    try {
      const userDocuments =
        await this.userDocumentService.getAllUserDocuments();
      res.status(200).json(UserDocumentPresenter.formatList(userDocuments));
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getUserDocumentById(req, res) {
    try {
      const { id } = req.params;
      const userDocument = await this.userDocumentService.getUserDocumentById(
        id
      );
      if (!userDocument) {
        return res.status(404).json({ message: "UserDocument not found" });
      }
      res.status(200).json(UserDocumentPresenter.format(userDocument));
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async createUserDocument(req, res) {
    try {
      const data = req.body;
      const errors = UserDocumentValidator.validateCreate(data);
      if (errors.length > 0) {
        return res.status(400).json({ errors });
      }
      const newUserDocument = await this.userDocumentService.createUserDocument(
        data
      );
      res.status(201).json(UserDocumentPresenter.format(newUserDocument));
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async updateUserDocument(req, res) {
    try {
      const { id } = req.params;
      const data = req.body;
      const errors = UserDocumentValidator.validateUpdate(data);
      if (errors.length > 0) {
        return res.status(400).json({ errors });
      }
      const updatedUserDocument =
        await this.userDocumentService.updateUserDocument(id, data);
      res.status(200).json(UserDocumentPresenter.format(updatedUserDocument));
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async deleteUserDocument(req, res) {
    try {
      const { id } = req.params;
      await this.userDocumentService.deleteUserDocument(id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default UserDocumentController;
