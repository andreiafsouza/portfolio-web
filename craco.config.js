const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@src': path.resolve(__dirname, 'src/'),
      '@components': path.resolve(__dirname, 'src/components/'),
      '@images': path.resolve(__dirname, 'src/assets/images/'),
      '@icons': path.resolve(__dirname, 'src/components/icons')
    }
  }
};
