class AuthService {
  constructor(userRepository, roleRepository, passwordService, tokenService) {
    this.userRepository = userRepository;
    this.roleRepository = roleRepository;
    this.passwordService = passwordService;
    this.tokenService = tokenService;
  }

  async signup(userData) {
    const { email, password, role_id, ...rest } = userData;

    const existingUser = await this.userRepository.findByEmail(
      email.toLowerCase()
    );
    if (existingUser) {
      throw new Error("Email is already in use");
    }

    const assignedRoleId = role_id || (await this.getDefaultRoleId());

    const hashedPassword = await this.passwordService.hash(password);

    return this.userRepository.create({
      ...rest,
      email: email.toLowerCase(),
      password: hashedPassword,
      role_id: assignedRoleId,
    });
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

  async getDefaultRoleId() {
    const userRole = await this.roleRepository.findByName("user");
    if (!userRole)
      throw new Error("Default role 'user' not found in the database");
    return userRole.role_id;
  }
}

export default AuthService;
