/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from 'jest';
import { createCjsPreset } from 'jest-preset-angular/presets';

const config: Config = {
  ...createCjsPreset(),

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

  coverageReporters: ['lcov', 'text-summary'],

  moduleNameMapper: {
    uuid: require.resolve('uuid'),
  },

  preset: 'jest-preset-angular',

  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],

  testEnvironment: 'jsdom',

  testMatch: ['<rootDir>/src/app/*.spec.ts', '<rootDir>/src/app/**/*.spec.ts'],

  testRunner: 'jest-jasmine2',
} satisfies Config;

console.log('config :>> ', config);

export default config;
