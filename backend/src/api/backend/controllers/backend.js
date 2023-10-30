'use strict';

/**
 * backend controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::backend.backend');
