#!/usr/bin/env node

var assert = require('assert');
var miners = require('../').miners;
var fields = require('../').constants.licenseFields;

miners.mineLicense({
  firstName: 'Tony',
  lastName: 'Parker'
}, function (err, data) {
  assert(err === null, 'Got an error: ' + err);
  assert(data, 'Not enough Tony Ps');
  for (var f in fields) {
    assert(f in data[0], 'Tony P missing field ' + f);
  }
});
