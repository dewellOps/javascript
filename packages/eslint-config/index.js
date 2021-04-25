module.exports = {
  extends: ['airbnb', '@dewellops/eslint-config-base', 'prettier/react'],
  plugins: ['react', 'jsx-a11y'],
  env: {
    browser: true,
  },
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'react/prop-types': 'off',
    'react/button-has-type': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '.storybook/**/*.js',
          'config-overrides.js',
          'src/setupTests.ts',
          'src/components/**/*.stories.tsx',
          'src/**/*.test.{ts,tsx}',
        ],
      },
    ],
  },
};
