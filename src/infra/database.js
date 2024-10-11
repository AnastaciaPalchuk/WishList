const { Client } = require('pg');
require('dotenv').config();
const config = require("../config/index")


class DataBase {
  constructor() {
     this.client = new Client({
      user: config.database.username,
      password: config.database.password,
      database: config.database.database_name,
      host: config.database.host,
      port: config.database.database_port,
    });
  }

  users = [];

  async connect() {
    await this.client.connect();
  }

  async query(sql) {
    return this.client.query(sql)
  }
}

module.exports = new DataBase();
