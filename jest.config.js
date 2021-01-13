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
        '^.+\\.tsx?$': 'ts-jest',
        '^.+\\.css$': 'jest-transform-css',
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
            '<rootDir>/test/fileMock.js',
    },
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
            '<rootDir>/test/fileMock.js',
    },
    collectCoverageFrom: ['**/*.{js,jsx,ts,tsx}', '!**/node_modules/**', '!**/vendor/**'],
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
