import bcrypt from "bcrypt";

class PasswordService {
  async hash(password) {
    return bcrypt.hash(password, 10);
  }

  async compare(password, hashedPassword) {
    return bcrypt.compare(password, hashedPassword);
  }
}

export default PasswordService;
