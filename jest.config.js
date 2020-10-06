// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
    roots: ['<rootDir>/test'],
    verbose: true,
    setupFiles: ['./test/setupTests.js'],
    setupFilesAfterEnv: ['<rootDir>test/setupTests.js'],
    snapshotSerializers: ['enzyme-to-json/serializer'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
    transform: {
        '^.+\\.js$': 'babel-jest',
        '^.+\\.css$': 'jest-transform-css',
    },
    collectCoverageFrom: ['**/*.{js,jsx}', '!**/node_modules/**', '!**/vendor/**'],
    clearMocks: true,
    collectCoverage: true,
    coverageDirectory: 'coverage',
    coveragePathIgnorePatterns: ['/node_modules/'],
    coverageProvider: 'babel',
    coverageReporters: ['json', 'text', 'lcov', 'clover'],
    errorOnDeprecated: true,
    notify: true,
    resetMocks: true,
    resetModules: true,
    testEnvironment: 'node',
    watchman: true,
};
