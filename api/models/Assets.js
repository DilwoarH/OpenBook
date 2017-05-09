/**
 * Assets.js
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
    name: {
      type: 'string',
      size: 60
    },
    description: {
      type: 'text'
    },
    booking_weight: {
      type: 'integer'
    }
  }
};

