class DefaultRoleService {
  constructor(roleRepository) {
    this.roleRepository = roleRepository;
  }

  async getDefaultRole() {
    const userRole = await this.roleRepository.findByName("user");
    if (!userRole) {
      throw new Error("Default role 'user' not found in the database");
    }
    return userRole.role_id;
  }
}

export default DefaultRoleService;
