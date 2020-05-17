const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');
const dotenv = require('dotenv').config();

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: dotenv.parsed,
    };
  }

  return {
    env: {
      DB_DRIVER: process.env.DB_DRIVER,
      DB_HOST: process.env.DB_HOST,
      DB_NAME: process.env.DB_NAME,
      DB_USER: process.env.DB_USER,
      DB_PASS: process.env.DB_PASS,
      DB_PORT: process.env.DB_PORT,
      API_URL: process.env.API_URL,

    },
  };
};
