import jwt from "jsonwebtoken";

class TokenService {
  generate(payload) {
    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" });
  }

  verify(token) {
    return jwt.verify(token, process.env.JWT_SECRET);
  }
}

export default TokenService;
