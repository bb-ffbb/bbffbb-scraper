var req = require('request');
var parsers = require('./parsers');
var urls = require('./constants').urls;
var searchForm = require('./constants').licenseSearchFormFields;

/**
   Asynchronously fetches the license search form, and extracts the CSRF nonce.
*/
exports.mineLicenseFormCSRF = function (next) {
  req(urls.licenseSearchForm, function (error, res, body) {
    if (error) {
      next(error);
    } else if (res.statusCode !== 200) {
      next(new Error('Wrong URL: ' + urls.licenseSearchForm), res);
    } else {
      try {
        var csrf = parsers.parseLicenseFormCSRF(body);
      } catch (e) {
        next(e, body);
      }
      next(null, csrf);
    }
  });
};

/**
   Asynchronously fetches licenses, given a CSRF token, and passes the extracted
   data down to the callback.
*/
exports.mineLicenseCSRF = function (query, csrf, next) {
  var form = {};
  form[searchForm.formId.name] = searchForm.formId.value;
  form[searchForm.CSRF] = csrf;
  for (var f in searchForm.mapping) {
    form[searchForm.mapping[f].name] = query[f] || searchForm.mapping[f].default || '';
  }
  req.post({ url: urls.licenseSearchService, form: form }, function (error, res, body) {
    if (error) {
      next(error);
    } else if (res.statusCode !== 200) {
      next(new Error('Wrong URL: ' + urls.licenseSearchService), res);
    } else {
      try {
        var json = JSON.parse(body);
        var htmlOutput = json.find((x) => x.command == 'insert').data;
        var licenses = parsers.parseLicenseList(htmlOutput);
      } catch (e) {
        next(e, body);
      }
      next(null, licenses);
    }
  });
};

/**
   Asynchronously fetches licenses, and passes the extracted data down to the
   callback.  It calls `mineLicenseCSRF` to obtain a CSRF id.
*/
exports.mineLicense = function (query, next) {
  exports.mineLicenseFormCSRF(function (err, csrf) {
    if (err) {
      next(err, csrf);
    } else {
      exports.mineLicenseCSRF(query, csrf, next);
    }
  });
};

/**
   Asynchronously fetches associations, and passes the extracted data down to the
   callback.
*/
exports.mineAssociation = function (query, next) {
  req(urls.clubSearchService + query, function (error, res, body) {
    if (error) {
      next(error);
    } else if (res.statusCode !== 200) {
      next(new Error('Wrong URL: ' + urls.clubSearchService + query), res);
    } else {
      try {
        next(null, JSON.parse(body));
      } catch(e) {
        next(e);
      }
    }
  });
};
