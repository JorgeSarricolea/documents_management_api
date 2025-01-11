class SignupService {
  constructor(userRepository, roleRepository, passwordService) {
    this.userRepository = userRepository;
    this.roleRepository = roleRepository;
    this.passwordService = passwordService;
  }

  async signup(userData) {
    const { email, password, role, role_id, ...rest } = userData;

    const existingUser = await this.userRepository.findByEmail(
      email.toLowerCase()
    );
    if (existingUser) {
      throw new Error("Email is already in use");
    }

    let assignedRoleId;
    if (role) {
      const roleRecord = await this.roleRepository.findByName(role);
      if (!roleRecord) {
        throw new Error("Invalid role provided");
      }
      assignedRoleId = roleRecord.role_id;
    } else {
      assignedRoleId = await this.getDefaultRoleId();
    }

    const hashedPassword = await this.passwordService.hash(password);

    return this.userRepository.create({
      ...rest,
      email: email.toLowerCase(),
      password: hashedPassword,
      role_id: assignedRoleId,
    });
  }

  async getDefaultRoleId() {
    const userRole = await this.roleRepository.findByName("user");
    if (!userRole)
      throw new Error("Default role 'user' not found in the database");
    return userRole.role_id;
  }
}

export default SignupService;
