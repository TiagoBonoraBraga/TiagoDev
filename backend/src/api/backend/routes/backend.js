'use strict';

/**
 * backend router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::backend.backend');
