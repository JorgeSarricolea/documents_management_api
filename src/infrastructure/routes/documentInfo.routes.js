import express from "express";
import DocumentInfoController from "../../interfaces/controllers/documentInfo.controller.js";
import DocumentInfoService from "../../application/services/documentInfo.service.js";
import DocumentInfoRepository from "../../domain/repositories/documentInfo.repository.js";
import prisma from "../../adapters/database/orm/prisma.js";

const router = express.Router();

const documentInfoRepository = new DocumentInfoRepository(prisma);
const documentInfoService = new DocumentInfoService(documentInfoRepository);
const documentInfoController = new DocumentInfoController(documentInfoService);

router.get("/", (req, res) =>
  documentInfoController.getAllDocumentInfos(req, res)
);
router.get("/:id", (req, res) =>
  documentInfoController.getDocumentInfoById(req, res)
);
router.post("/", (req, res) =>
  documentInfoController.createDocumentInfo(req, res)
);
router.put("/:id", (req, res) =>
  documentInfoController.updateDocumentInfo(req, res)
);
router.delete("/:id", (req, res) =>
  documentInfoController.deleteDocumentInfo(req, res)
);

export default router;
