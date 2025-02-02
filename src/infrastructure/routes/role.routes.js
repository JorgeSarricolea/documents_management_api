import express from "express";
import RoleController from "../../interfaces/controllers/role.controller.js";
import RoleService from "../../application/services/role.service.js";
import RoleRepository from "../../domain/repositories/role.repository.js";
import prisma from "../../adapters/database/orm/prisma.js";
import authMiddleware from "../../interfaces/middlewares/auth.middleware.js";

const router = express.Router();

const roleRepository = new RoleRepository(prisma);
const roleService = new RoleService(roleRepository);
const roleController = new RoleController(roleService);

router.use(authMiddleware);

router.get("/", (req, res) => roleController.getAllRoles(req, res));
router.get("/:id", (req, res) => roleController.getRoleById(req, res));
router.post("/", (req, res) => roleController.createRole(req, res));
router.put("/:id", (req, res) => roleController.updateRole(req, res));
router.delete("/:id", (req, res) => roleController.deleteRole(req, res));

export default router;
