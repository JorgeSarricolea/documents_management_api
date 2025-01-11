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
    const name = data.name.toLowerCase();

    const existingRole = await this.roleRepository.findByName(name);
    if (existingRole) {
      throw new Error(`A role with the name '${name}' already exists`);
    }

    return await this.roleRepository.create({ ...data, name });
  }

  async updateRole(role_id, data) {
    return await this.roleRepository.update(role_id, data);
  }

  async deleteRole(role_id) {
    return await this.roleRepository.delete(role_id);
  }
}

export default RoleService;
