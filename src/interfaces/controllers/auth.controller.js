import AuthValidator from "../validators/auth.validator.js";
import UserPresenter from "../presenters/user.presenter.js";

class AuthController {
  constructor(signupService, loginService) {
    this.signupService = signupService;
    this.loginService = loginService;
  }

  async signup(req, res) {
    try {
      const userData = req.body;

      const errors = AuthValidator.validateSignup(userData);
      if (errors.length > 0) return res.status(400).json({ errors });

      const newUser = await this.signupService.signup(userData);
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

      const { user, token } = await this.loginService.login(
        email,
        password,
        res
      );
      res.status(200).json(UserPresenter.formatWithToken(user, token));
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async logout(req, res) {
    try {
      const result = await this.loginService.logout(res);
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

export default AuthController;
