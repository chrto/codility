module.exports = {
  transform: { '^.+\\.ts?$': 'ts-jest' },
  testEnvironment: 'node',
  testRegex: '/src/.*\\.(test|spec)?\\.(ts)$',
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
  setupFilesAfterEnv: ["jest-extended"],
  moduleNameMapper: {
    "^utils/(.*)": "<rootDir>/src/utils/$1"
  },
};
