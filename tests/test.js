#!/usr/bin/env node

var assert = require('assert');
var miners = require('../').miners;
var licenseFields = require('../').constants.licenseFields;
var associationFields = require('../').constants.associationFields;

miners.mineLicense({
  firstName: 'Pierre',
  lastName: 'Durand'
}, function (err, data) {
  assert(err === null, 'Got an error: ' + err);
  assert(data, 'Not enough Pierre Ps');
  for (var f in licenseFields) {
    assert(f in data[0], 'Pierre missing field ' + f);
  }
});

miners.mineAssociation("ASVEL", function (err, data) {
  assert(err === null, 'Got an error: ' + err);
  assert(data, 'ASVEL does not exist');
  for (var f in associationFields) {
    assert(f in data[0], 'ASVEL missing field \'' + associationFields[f] + '\'');
  }
})
