class UserService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async getUserById(userId) {
    const user = await this.userRepository.findById(userId);
    if (!user) {
      throw new Error(`User with ID ${userId} not found`);
    }
    return user;
  }

  async getAllUsers() {
    return this.userRepository.findAll();
  }

  async updateUser(userId, userData) {
    const existingUser = await this.userRepository.findById(userId);
    if (!existingUser) {
      throw new Error(`User with ID ${userId} not found`);
    }
    return this.userRepository.update(userId, userData);
  }

  async deleteUser(userId) {
    const existingUser = await this.userRepository.findById(userId);
    if (!existingUser) {
      throw new Error(`User with ID ${userId} not found`);
    }
    await this.userRepository.delete(userId);
    return { message: `User with ID ${userId} has been deleted` };
  }
}

export default UserService;
