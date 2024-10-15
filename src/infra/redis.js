const Redis = require("ioredis");
const config = require("../config/index");

class RedisConnection {

  connect() {
    this.redis = new Redis({
      port: config.redis.port,
      host: config.redis.host,
    });
  }

  query(){
    return this.redis;
  }
}

module.exports = new RedisConnection();
