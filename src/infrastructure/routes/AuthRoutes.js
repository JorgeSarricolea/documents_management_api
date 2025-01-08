import express from "express";
import AuthController from "../../interfaces/controllers/AuthController.js";
import AuthService from "../../application/services/auth/AuthService.js";
import UserRepository from "../../domain/repositories/UserRepository.js";
import RoleRepository from "../../domain/repositories/RoleRepository.js";
import PasswordService from "../../application/services/auth/PasswordService.js";
import TokenService from "../../application/services/auth/TokenService.js";
import prisma from "../../adapters/database/orm/prisma.js";

const router = express.Router();

const userRepository = new UserRepository(prisma);
const roleRepository = new RoleRepository(prisma);
const passwordService = new PasswordService();
const tokenService = new TokenService();

const authService = new AuthService(
  userRepository,
  roleRepository,
  passwordService,
  tokenService
);

const authController = new AuthController(authService);

router.post("/signup", (req, res) => authController.signup(req, res));
router.post("/login", (req, res) => authController.login(req, res));

export default router;
