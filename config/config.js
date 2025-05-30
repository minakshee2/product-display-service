const dotenv = require("dotenv");
dotenv.config();

const env = {
  PORT: process.env.PORT || 3000,
  DB_URL: process.env.DB_URL,
  DB_NAME: process.env.DB_NAME,
};

module.exports = env;
