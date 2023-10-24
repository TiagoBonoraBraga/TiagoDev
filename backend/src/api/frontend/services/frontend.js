'use strict';

/**
 * frontend service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::frontend.frontend');
