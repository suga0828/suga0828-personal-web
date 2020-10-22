module.exports = {
  preset: "jest-preset-angular",
  globals: {
    "ts-jest": {
      tsConfig: "<rootDir>/tsconfig.spec.json",
      stringifyContentPathRegex: "\\.html$"
    },
  },
  setupFilesAfterEnv: ["<rootDir>/setupJest.ts"],
  testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/dist/"],
};
