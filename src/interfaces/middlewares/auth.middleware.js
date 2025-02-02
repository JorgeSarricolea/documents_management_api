import TokenService from "../../application/services/auth/token.service.js";

const COOKIE_NAME = "token_documents_api";
const tokenService = new TokenService();

const authMiddleware = (req, res, next) => {
  try {
    if (!req.cookies) {
      return res
        .status(401)
        .json({ message: "Cookie-parser not properly configured" });
    }

    const token = req.cookies[COOKIE_NAME];

    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }

    const decoded = tokenService.verify(token);

    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
};

export default authMiddleware;
