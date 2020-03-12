'use strict';

const { CacheService } = require('../services');

class AppController {

  constructor() {
    this.cacheService = new CacheService();
  }

  stats(req, res) {
    const hits = this.cacheService.get('stats:hits') || 0;
    res.json({
      success: true,
      message: `Stats-Hits: ${hits}`
    });
    this.cacheService.set('stats', hits + 1);
  }

}

module.exports = {
  AppController
};
