/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

const presets = require('jest-preset-angular/presets');

const config = {
  ...presets.createCjsPreset(),

  clearMocks: true,

  collectCoverage: true,

  collectCoverageFrom: [
    '<rootDir>/src/app/**/*.ts',
    '!<rootDir>/src/app/app.config.ts',
    '!<rootDir>/src/app/app.routes.ts',
    '!<rootDir>/src/app/material-configs/**',
    '!<rootDir>/src/app/enums/**',
    '!<rootDir>/src/app/**/index.ts',
    '!<rootDir>/src/app/**/*.mock.ts',
  ],

  coverageDirectory: 'coverage',

  coverageProvider: 'v8',

  coverageReporters: ['lcov'],

  moduleNameMapper: {
    'src/(.*)': '<rootDir>/src/$1',
    uuid: require.resolve('uuid'),
  },

  preset: 'jest-preset-angular',

  testEnvironment: 'jsdom',

  testMatch: ['<rootDir>/src/app/*.spec.ts', '<rootDir>/src/app/**/*.spec.ts'],

  testRunner: 'jest-jasmine2',
};

module.exports = config;
