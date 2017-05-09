/**
 * Bookings.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    id: {
      type: 'integer',
      autoIncrement: true
    },
    asset_id: {
      type: 'integer'
    },
    date_from: {
      type: 'datetime'
    },
    date_to: {
      type: 'datetime'
    }
  }
};

