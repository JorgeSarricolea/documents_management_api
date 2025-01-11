import { jest } from "@jest/globals";

const mockPasswordService = {
  hash: jest.fn(),
  compare: jest.fn(),
};

export default mockPasswordService;
