/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  clearMocks: true,
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFilesAfterEnv: ['<rootDir>/src/singleton.ts'],
  testPathIgnorePatterns: ["/node_modules/", "\\.d\\.ts$"],  
  testMatch: ["**/?(*.)+(spec|test).[tj]s?(x)"],
};