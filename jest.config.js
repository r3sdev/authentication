module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  modulePathIgnorePatterns: [
    "<rootDir>/native",
    "<rootDir>/web",
    "<rootDir>/core/test",
  ],
  coveragePathIgnorePatterns: [
    "<rootDir>/core/test",
  ]
};