/**
 * Users.js
 * @module User Model
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    id: {
      type: 'integer',
      autoIncrement: true
    },
    first_name: {
      type: 'string',
      size: 60
    },
    last_name: {
      type: 'string',
      size: 60
    },
    email: {
      type: 'email',
      unique: true
    }
  }
  
};