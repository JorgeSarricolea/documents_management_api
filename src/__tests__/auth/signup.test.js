import SignupService from "../../application/services/auth/signup.service.js";
import { jest } from "@jest/globals";

import mockUserRepository from "../../mocks/user.repository.mock.js";
import mockPasswordService from "../../mocks/password.repository.mock.js";
import mockRoleRepository from "../../mocks/role.repository.mock.js";

describe("Signup Service", () => {
  let signupService;

  beforeEach(() => {
    signupService = new SignupService(
      mockUserRepository,
      mockRoleRepository,
      mockPasswordService
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should throw an error if the email is already in use", async () => {
    mockUserRepository.findByEmail.mockResolvedValueOnce({});

    await expect(
      signupService.signup({
        email: "test@example.com",
        password: "Password123!",
      })
    ).rejects.toThrow("Email is already in use");

    expect(mockUserRepository.findByEmail).toHaveBeenCalledWith(
      "test@example.com"
    );
  });

  it("should throw an error if the role is invalid", async () => {
    mockUserRepository.findByEmail.mockResolvedValueOnce(null);
    mockRoleRepository.findByName.mockResolvedValueOnce(null);

    await expect(
      signupService.signup({ email: "test@example.com", role: "invalid_role" })
    ).rejects.toThrow("Invalid role provided");
  });

  it("should create a user with a hashed password and default role", async () => {
    mockUserRepository.findByEmail.mockResolvedValueOnce(null);
    mockRoleRepository.findByName.mockResolvedValueOnce({ role_id: 1 });
    mockPasswordService.hash.mockResolvedValueOnce("hashed_password");
    mockUserRepository.create.mockResolvedValueOnce({ user_id: 1 });

    const userData = { email: "test@example.com", password: "Password123!" };
    const result = await signupService.signup(userData);

    expect(mockPasswordService.hash).toHaveBeenCalledWith("Password123!");
    expect(mockUserRepository.create).toHaveBeenCalledWith({
      email: "test@example.com",
      password: "hashed_password",
      role_id: 1,
    });
    expect(result).toEqual({ user_id: 1 });
  });
});
