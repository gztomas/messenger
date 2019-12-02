module.exports = {
  extends: ['airbnb', 'plugin:prettier/recommended'],
  rules: {
    'react/jsx-filename-extension': ['warn', { extensions: ['.js'] }],
    'react/jsx-props-no-spreading': 'off'
  },
  env: {
    browser: true,
    jest: true,
  },
};
