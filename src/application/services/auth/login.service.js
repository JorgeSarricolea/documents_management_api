class LoginService {
  constructor(userRepository, passwordService, tokenService) {
    this.userRepository = userRepository;
    this.passwordService = passwordService;
    this.tokenService = tokenService;
  }

  async login(email, password) {
    const user = await this.userRepository.findByEmail(email.toLowerCase());
    if (!user) throw new Error("Invalid email or password");

    const isPasswordValid = await this.passwordService.compare(
      password,
      user.password
    );
    if (!isPasswordValid) throw new Error("Invalid email or password");

    const token = this.tokenService.generate({
      userId: user.user_id,
      roleId: user.role_id,
    });

    return { user, token };
  }
}

export default LoginService;
