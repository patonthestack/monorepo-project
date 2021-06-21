var path = require('path');

module.exports = {
  reactStrictMode: true,

  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.tsx?|\.ts?$/,
      use: [options.defaultLoaders.babel],
    });

    config.resolve.alias['react'] = path.join(__dirname, '..', '..', 'node_modules', 'react');
    config.resolve.alias['react-dom'] = path.resolve(
      __dirname,
      '..',
      '..',
      'node_modules',
      'react-dom',
    );

    return config;
  },
};
