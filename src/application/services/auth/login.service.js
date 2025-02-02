const COOKIE_NAME = "token_documents_api";

class LoginService {
  constructor(userRepository, passwordService, tokenService) {
    this.userRepository = userRepository;
    this.passwordService = passwordService;
    this.tokenService = tokenService;
  }

  async login(email, password, res) {
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

    res.cookie(COOKIE_NAME, token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      maxAge: 3600000, // 1 hour in milliseconds
    });
    return { user, token };
  }

  async logout(res) {
    res.clearCookie(COOKIE_NAME, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
    });
    return { message: "Logout successful" };
  }
}

export default LoginService;
