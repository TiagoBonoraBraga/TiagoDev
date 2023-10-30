'use strict';

/**
 * backend service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::backend.backend');
