exports.urls = {
  base: 'http://www.ffbb.com',
  licenseSearchForm: 'http://www.ffbb.com/jouer/recherche-avancee',
  licenseSearchService: 'http://www.ffbb.com/system/ajax',
  clubSearchService: 'http://www.ffbb.com/ffbb-webservice/lookup-club?cd_lbclub='
};

exports.licenseSearchFormFields = {
  formId: { name: 'form_id', value: 'ffbb_prototype_ws_simple_form' },
  CSRF: 'form_build_id',
  mapping: {
    licenceId: { name: 'numLicence' },
    nationalId: { name: 'id_license' },
    lastName: { name: 'nom' },
    firstName: { name: 'prenom' },
    gender: { name: 'sexe', default: 'M' },
    birthDate: { name: 'dtNais[date]' },
    association: { name: 'lbOrg' }
  }
};

exports.licenseFields = {
  licenseId: 'N° national',
  nationalId: 'N° licence',
  lastName: 'Nom',
  firstName: 'Prénom',
  gender: 'Sexe',
  birthDate: 'Date naissance',
  association: 'Club',
  qualificationDate: 'Date qualif.',
  licenseType: 'Type lic.'
};
