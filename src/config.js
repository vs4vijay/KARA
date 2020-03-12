'use strict';

require('dotenv').config();

const CONFIG = {
  PORT: process.env.PORT || 9999,
  BASE_PATH: '/api/v1',
  TIMESTAMP: new Date().toTimeString()
};

const REDIS_CONFIG = {
  HOST: process.env.REDIS_HOST,
  PORT: process.env.REDIS_PORT || 6379
}

module.exports = {
  CONFIG,
  REDIS_CONFIG
};
