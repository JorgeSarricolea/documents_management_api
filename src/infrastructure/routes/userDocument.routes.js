import express from "express";
import UserDocumentController from "../../interfaces/controllers/userDocument.controller.js";
import UserDocumentService from "../../application/services/userDocument.service.js";
import UserDocumentRepository from "../../domain/repositories/userDocument.repository.js";
import prisma from "../../adapters/database/orm/prisma.js";
import authMiddleware from "../../interfaces/middlewares/auth.middleware.js";

const router = express.Router();

const userDocumentRepository = new UserDocumentRepository(prisma);
const userDocumentService = new UserDocumentService(userDocumentRepository);
const userDocumentController = new UserDocumentController(userDocumentService);

router.use(authMiddleware);

router.get("/", (req, res) =>
  userDocumentController.getAllUserDocuments(req, res)
);
router.get("/:id", (req, res) =>
  userDocumentController.getUserDocumentById(req, res)
);
router.post("/", (req, res) =>
  userDocumentController.createUserDocument(req, res)
);
router.put("/:id", (req, res) =>
  userDocumentController.updateUserDocument(req, res)
);
router.delete("/:id", (req, res) =>
  userDocumentController.deleteUserDocument(req, res)
);

export default router;
