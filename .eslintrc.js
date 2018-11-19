module.exports = {
  extends: ['airbnb', 'plugin:prettier/recommended'],
  rules: {
    'react/jsx-filename-extension': ['warn', { extensions: ['.js'] }],
  },
  env: {
    browser: true,
    jest: true,
  },
};
