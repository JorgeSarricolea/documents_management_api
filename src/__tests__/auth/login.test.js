import LoginService from "../../application/services/auth/login.service.js";
import { jest } from "@jest/globals";

import mockTokenService from "../../mocks/token.repository.mock.js";
import mockUserRepository from "../../mocks/user.repository.mock.js";
import mockPasswordService from "../../mocks/password.repository.mock.js";

describe("Login Service", () => {
  let loginService;

  beforeEach(() => {
    loginService = new LoginService(
      mockUserRepository,
      mockPasswordService,
      mockTokenService
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should throw an error if the email does not exist", async () => {
    mockUserRepository.findByEmail.mockResolvedValueOnce(null);

    await expect(
      loginService.login("test@example.com", "Password123!")
    ).rejects.toThrow("Invalid email or password");
  });

  it("should throw an error if the password is incorrect", async () => {
    mockUserRepository.findByEmail.mockResolvedValueOnce({
      email: "test@example.com",
      password: "hashed_password",
    });
    mockPasswordService.compare.mockResolvedValueOnce(false);

    await expect(
      loginService.login("test@example.com", "WrongPassword!")
    ).rejects.toThrow("Invalid email or password");
  });

  it("should return a user and token if login is successful", async () => {
    const user = {
      user_id: 1,
      email: "test@example.com",
      role_id: 2,
      password: "hashed_password",
    };
    mockUserRepository.findByEmail.mockResolvedValueOnce(user);
    mockPasswordService.compare.mockResolvedValueOnce(true);
    mockTokenService.generate.mockReturnValueOnce("test_token");

    const result = await loginService.login("test@example.com", "Password123!");

    expect(mockPasswordService.compare).toHaveBeenCalledWith(
      "Password123!",
      "hashed_password"
    );
    expect(mockTokenService.generate).toHaveBeenCalledWith({
      userId: 1,
      roleId: 2,
    });
    expect(result).toEqual({
      user,
      token: "test_token",
    });
  });
});
