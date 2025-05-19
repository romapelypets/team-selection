module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
  transformIgnorePatterns: ['node_modules/(?!.*\\.mjs$)'],
  moduleNameMapper: {
    '@layout-components/(.*)': '<rootDir>/src/app/layout-components/$1',
    '@pages/(.*)': '<rootDir>/src/app/pages/+$1',
    '@features/(.*)': '<rootDir>/src/app/features/$1',
  },
};
