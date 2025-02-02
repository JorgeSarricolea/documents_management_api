// auth.routes.js
import express from "express";
import SignupService from "../../application/services/auth/signup.service.js";
import LoginService from "../../application/services/auth/login.service.js";
import AuthController from "../../interfaces/controllers/auth.controller.js";
import UserRepository from "../../domain/repositories/user.repository.js";
import RoleRepository from "../../domain/repositories/role.repository.js";
import PasswordService from "../../application/services/auth/password.service.js";
import TokenService from "../../application/services/auth/token.service.js";
import prisma from "../../adapters/database/orm/prisma.js";

const router = express.Router();

const userRepository = new UserRepository(prisma);
const roleRepository = new RoleRepository(prisma);
const passwordService = new PasswordService();
const tokenService = new TokenService();

const signupService = new SignupService(
  userRepository,
  roleRepository,
  passwordService
);
const loginService = new LoginService(
  userRepository,
  passwordService,
  tokenService
);

const authController = new AuthController(signupService, loginService);

router.post("/signup", (req, res) => authController.signup(req, res));
router.post("/login", (req, res) => authController.login(req, res));
router.post("/logout", (req, res) => authController.logout(req, res));

export default router;
