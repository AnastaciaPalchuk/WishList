require("dotenv").config();
const process = require("process");

module.exports = {
  server: {
    port: process.env.WEB_PORT,
  },
  database: {
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database_name: process.env.DATABASE,
    host: process.env.HOST,
    database_port: process.env.DATABASE_PORT,
  },
  redis: {
    port: process.env.REDIS_PORT,
    host: process.env.REDIS_HOST
  }
};
