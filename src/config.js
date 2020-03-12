'use strict';

require('dotenv').config();

const CONFIG = {
  PORT: process.env.PORT || 9999,
  BASE_PATH: '/api/v1',
  TIMESTAMP: new Date().toTimeString()
};

module.exports = {
  CONFIG
};
