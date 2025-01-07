class RoleRepository {
  constructor(database) {
    this.database = database;
  }

  async getAll() {
    return this.database.role.findMany();
  }

  async getById(role_id) {
    return this.database.role.findUnique({
      where: { role_id },
    });
  }

  async create(data) {
    return this.database.role.create({
      data,
    });
  }

  async update(role_id, data) {
    return this.database.role.update({
      where: { role_id },
      data,
    });
  }

  async delete(role_id) {
    return this.database.role.delete({
      where: { role_id },
    });
  }
}

export default RoleRepository;
