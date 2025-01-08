import AuthValidator from "../validators/AuthValidator.js";
import UserPresenter from "../presenters/UserPresenter.js";

class AuthController {
  constructor(authService) {
    this.authService = authService;
  }

  async signup(req, res) {
    try {
      const userData = req.body;

      const errors = AuthValidator.validateSignup(userData);
      if (errors.length > 0) return res.status(400).json({ errors });

      const newUser = await this.authService.signup(userData);
      res.status(201).json(UserPresenter.format(newUser));
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async login(req, res) {
    try {
      const { email, password } = req.body;

      const errors = AuthValidator.validateLogin({ email, password });
      if (errors.length > 0) return res.status(400).json({ errors });

      const { user, token } = await this.authService.login(email, password);
      res.status(200).json(UserPresenter.formatWithToken(user, token));
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

export default AuthController;
