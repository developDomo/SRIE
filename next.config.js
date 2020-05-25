const withImages = require('next-images');
const dotenv = require('dotenv').config();

module.exports = withImages();

module.exports = {
  env: dotenv.parsed,
  webpack(config) {
    config.module.rules.push({
      test: /\.(png|jpg|gif|svg)$/i,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 10000,
          },
        },
      ],

    });

    return config;
  },
};
