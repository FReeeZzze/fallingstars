const path = require('path');
const withImages = require('next-images');

module.exports = withImages({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  webpack(config, options) {
    config.resolve.modules.push(path.resolve('./'));
    config.resolve.modules.push(path.resolve('./src/'));
    return config;
  },
});
