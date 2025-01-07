import express from "express";
import RoleController from "../../interfaces/controllers/RoleController.js";
import RoleService from "../../application/services/RoleService.js";
import RoleRepository from "../../domain/repositories/RoleRepository.js";
import prisma from "../../adapters/database/orm/prisma.js";

const router = express.Router();

const roleRepository = new RoleRepository(prisma);
const roleService = new RoleService(roleRepository);
const roleController = new RoleController(roleService);

router.get("/roles", (req, res) => roleController.getAllRoles(req, res));
router.get("/roles/:id", (req, res) => roleController.getRoleById(req, res));
router.post("/roles", (req, res) => roleController.createRole(req, res));
router.put("/roles/:id", (req, res) => roleController.updateRole(req, res));
router.delete("/roles/:id", (req, res) => roleController.deleteRole(req, res));

export default router;
