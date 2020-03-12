'use strict';

const Redis = require('ioredis'); 

const { REDIS_CONFIG } = require('../config');

class CacheService {

  constructor() {
    // TODO: Have connection pooling and IoC
    // this.redisConnection = redisConnection;
    this.cache = new Redis({
      HOST: REDIS_CONFIG.HOST,
      PORT: REDIS_CONFIG.PORT
    });
  }

  set(key, value) {
    this.cache.set(key, value);
  }

  get(key) {
    this.cache.get(key);
  }

  inc(key) {
    this.cache
        .pipeline();
  }

}

module.exports = {
  CacheService
};
