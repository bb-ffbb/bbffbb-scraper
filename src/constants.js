exports.urls = {
  base: 'http://www.ffbb.com',
  licenseSearchForm: 'http://www.ffbb.com/jouer/recherche-avancee',
  licenseSearchService: 'http://www.ffbb.com/system/ajax',
  clubSearchService: 'http://www.ffbb.com/ffbb-webservice/lookup-club?cd_lbclub=',
  clubListFromCommiteeService: 'https://resultats.ffbb.com/organisation/listeorganismes/',
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
  association: 'Club',
  qualificationDate: 'Date qualif.',
  licenseType: 'Type lic.'
};

exports.associationFields = {
  idOrg: 'Identifiant organisation',
  idOrgPere: 'Identifiant organisation père',
  cdOrg: 'Code organisation',
  nomOrg: 'Nom organisation',
  typeOrg: 'Type de l\'organisation',
  adr: 'Adresse',
  telephone: 'Téléphone',
  telecopie: 'Fax',
  mail: 'Email',
  commune: 'Commune',
  typeAssociation: "Type association",
  salleOrg: "Salle principale de l'association",
  urlWebSite: "Site internet",
  membres: "Membres"
}

exports.associationFromCommiteeFields = {
  postalCode: 'Code postal',
  clubNumber: 'Code organisation',
  clubName: 'Nom organisation',
  urlId: 'Url id organisation',
  city: 'Ville',
  type: 'Type organisation'
}
