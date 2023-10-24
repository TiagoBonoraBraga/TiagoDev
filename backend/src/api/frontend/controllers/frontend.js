'use strict';

/**
 * frontend controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::frontend.frontend');
