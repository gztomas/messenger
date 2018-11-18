const withCSS = require('@zeit/next-css');

module.exports = withCSS({
  // Fixes npm packages that depend on `fs` module
  webpack: config => ({ ...config, node: { fs: 'empty' } }),
});
