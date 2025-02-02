import SignupService from "./signup.service.js";
import LoginService from "./login.service.js";
import DefaultRoleService from "./defaultRole.service.js";

class AuthService {
  constructor(userRepository, roleRepository, passwordService, tokenService) {
    this.signupService = new SignupService(
      userRepository,
      roleRepository,
      passwordService
    );
    this.loginService = new LoginService(
      userRepository,
      passwordService,
      tokenService
    );
    this.defaultRoleService = new DefaultRoleService(roleRepository);
  }

  async signup(userData) {
    return this.signupService.execute(userData);
  }

  async login(email, password) {
    return this.loginService.execute(email, password);
  }

  async getDefaultRoleId() {
    return this.defaultRoleService.getDefaultRole();
  }

  async logout(res) {
    return this.loginService.logout(res);
  }
}

export default AuthService;
