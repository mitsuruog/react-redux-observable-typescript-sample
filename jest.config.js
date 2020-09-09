module.exports = {
  rootDir: ".",
  preset: "ts-jest",
  coverageDirectory: "<rootDir>/test/__coverage__/",
  setupFiles: ["<rootDir>/test/__mocks__/shim.js"],
  roots: ["<rootDir>/src/"],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/test/__mocks__/fileMock.js",
    "\\.(css|scss|less)$": "<rootDir>/test/__mocks__/styleMock.js",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  transformIgnorePatterns: ["/node_modules/"],
  testMatch: [
    "<rootDir>/src/**/__test__/**/*.{js,jsx,ts,tsx}",
    "<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}",
  ],
  moduleDirectories: ["node_modules"],
  globals: {},
};