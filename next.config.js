const withImages = require('next-images');
const dotenv = require('dotenv').config();
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = withImages();

const envs = {
  DB_DRIVER: process.env.DB_DRIVER,
  DB_HOST: process.env.DB_HOST,
  DB_NAME: process.env.DB_NAME,
  DB_USER: process.env.DB_USER,
  DB_PASS: process.env.DB_PASS,
  DB_PORT: process.env.DB_PORT,
  API_URL: process.env.API_URL,
  PDF_API_KEY: process.env.PDF_API,
  PDF_URL: process.env.PDF_URL,
};


module.exports = (phase) => ({
  env: (phase === PHASE_DEVELOPMENT_SERVER) ? dotenv.parsed : envs,
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
});
