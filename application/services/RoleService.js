class RoleService {
  constructor(roleRepository) {
    this.roleRepository = roleRepository;
  }

  async getAllRoles() {
    return await this.roleRepository.getAll();
  }

  async getRoleById(role_id) {
    return await this.roleRepository.getById(role_id);
  }

  async createRole(data) {
    if (!data.name) {
      throw new Error("Role name is required");
    }
    return await this.roleRepository.create(data);
  }

  async updateRole(role_id, data) {
    return await this.roleRepository.update(role_id, data);
  }

  async deleteRole(role_id) {
    return await this.roleRepository.delete(role_id);
  }
}

export default RoleService;
