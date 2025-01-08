class UserRepository {
  constructor(database) {
    this.database = database;
  }

  async findByEmail(email) {
    return this.database.user.findUnique({
      where: { email },
    });
  }

  async create(userData) {
    return this.database.user.create({
      data: userData,
    });
  }

  async findById(userId) {
    return this.database.user.findUnique({ where: { user_id: userId } });
  }

  async findAll() {
    return this.database.user.findMany();
  }

  async update(userId, userData) {
    return this.database.user.update({
      where: { user_id: userId },
      data: userData,
    });
  }

  async delete(userId) {
    return this.database.user.delete({ where: { user_id: userId } });
  }
}

export default UserRepository;
