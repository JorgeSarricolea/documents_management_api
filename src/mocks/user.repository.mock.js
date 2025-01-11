import { jest } from "@jest/globals";

const mockUserRepository = {
  findByEmail: jest.fn(),
  create: jest.fn(),
};

export default mockUserRepository;
