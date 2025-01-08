import express from "express";
import UserController from "../../interfaces/controllers/UserController.js";
import UserService from "../../application/services/UserService.js";
import UserRepository from "../../domain/repositories/UserRepository.js";
import prisma from "../../adapters/database/orm/prisma.js";

const router = express.Router();

const userRepository = new UserRepository(prisma);
const userService = new UserService(userRepository);
const userController = new UserController(userService);

router.get("/:id", (req, res) => userController.getUserById(req, res));
router.get("/", (req, res) => userController.getAllUsers(req, res));
router.put("/:id", (req, res) => userController.updateUser(req, res));
router.delete("/:id", (req, res) => userController.deleteUser(req, res));

export default router;
