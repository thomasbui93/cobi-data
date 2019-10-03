module.exports = {
  silent: false,
  verbose: false,
  transform: {
    ".ts": "ts-jest"
  },
  testRegex: "(/__tests__/.*|\\.(test|spec))\\.ts$",
  moduleFileExtensions: ["ts", "js"],
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "/__tests__/",
    "index.ts"
  ],
  collectCoverageFrom: ["src/lib/**/*.ts"],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 95,
      lines: 95,
      statements: 95
    }
  },
  collectCoverage: true
}
