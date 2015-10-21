var assert = require('assert');
var form = require('./constants').licenseSearchFormFields;

function input (name, val) {
  return '<input type="hidden" name="' + name + '" value="' + val + '" />';
}
var REGEX = {
  licenseSearch: new RegExp(input(form.CSRF, '(.+)') + '\\s' +
                            input(form.formId.name, form.formId.value)),
  licenseList: /<tr.*?>([^]*?)<\/tr>/g,
  licenseFields: /<td><div class="(\w+)">(?:<\w+.*?>)*(.*?)(?:<\/\w+>)+?<\/td>/g
};
var FIELD_NAME_MAPPING = {
  nrlicence: 'nationalId',
  numNational: 'licenseId',
  nom: 'lastName',
  prenom: 'firstName',
  sexe: 'gender',
  dateNaissance: 'birthDate',
  nomOrganisme: 'association',
  dateQualif: 'qualificationDate',
  typeLicence: 'licenseType'
};

/**
   Parse the license search form, and return the value of its CSRF field.
*/
exports.parseLicenseFormCSRF = function (blob) {
  var match = REGEX.licenseSearch.exec(blob);
  assert(match, 'Wrong format');
  return match[1];
};

/**
   Parse the HTML table of license search results, and return a JS object.
*/
exports.parseLicenseList = function (blob) {
  if (blob === '<h1 class="title">Aucun Résultat trouvé</h1>') {
    return null;
  }
  var items = []; var row;
  while ((row = REGEX.licenseList.exec(blob)) !== null) {
    var license = {}; var field;
    while ((field = REGEX.licenseFields.exec(row[1])) !== null) {
      var fieldName = FIELD_NAME_MAPPING[field[1]];
      assert(fieldName, 'Unknown field name' + fieldName);
      license[fieldName] = field[2];
    }
    items.push(license);
  }
  if (items.length === 0) {
    throw new Error('Cannot parse licenses: ' + blob);
  }
  return items;
};
