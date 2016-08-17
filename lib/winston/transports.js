/*
 * transports.js: Set of all transports Winston knows about
 *
 * (C) 2010 Charlie Robbins
 * MIT LICENCE
 *
 */

var path = require('path');

//
// Setup all transports as lazy-loaded getters.
//
Object.defineProperties(
  exports,
  ['Console', 'File', 'Http', 'Memory']
    .reduce(function (acc, name) {
      acc[name] = {
        configurable: true,
        enumerable: true,
        get: function () {
          // var fullpath = path.join(__dirname, 'transports', name.toLowerCase());
          // return require(fullpath)[name];

          // Require from a relative path so that webpack will be able to resolve the module
          return require('./transports/' + name.toLowerCase())[name];
        }
      };

      return acc;
    }, {})
);
