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

exports.mobileAPI = {
  version: '1.0.3',
  baseURL: 'http://mobiles.ffbb.com/php/v1_0_3/',
  endpoints: {
    championships: {
      url: 'topChampionships.php',
      type: 'POST',
      desc: 'List of championships organised by FFBB',
      parameters: [
        {
          name: 'type',
          values: ['championship', 'cup'],
          required: true
        }
      ],
      fields: [ 'name', 'id', 'type' ]
    },
    departements: {
      url: 'areas.php',
      type: 'POST',
      desc: 'List of "departements" managed by FFBB',
      parameters: [
        {
          name: 'type',
          values: ['championship', 'cup'],
          required: true
        }
      ],
      fields: [ 'name', 'id' ]
    },
    deptChampionships: {
      url: 'areaCompetitions.php',
      type: 'POST',
      desc: 'List of championships by "departement"',
      parameters: [
        {
          name: 'type',
          values: [ 'championship', 'cup' ],
          required: true
        },
        {
          name: 'id',
          required: true
        }
      ],
      fields: [ 'name', 'id', 'groupField' ]
    },
    results: {
      url: 'results.php',
      type: 'POST',
      desc: 'Results by championship',
      parameters: [
        {
          name: 'type',
          values: ['championship', 'cup'],
          required: true
        },
        {
          name: 'id',
          required: true
        },
        {
          name: 'group',
          values: [ 'Masculin', 'F\u00e9minin' ]
        },
        {
          name: 'subCompetition',
        }
      ],
      fields: {
        'currentDay': null,
        'days': [ 'desc', 'name' ],
        'groups': [ 'id', 'name', 'type' ],
        'matchs': [ 'date', 'formattedDate', 'hometeam',
                    'matchId', 'score', 'time', 'visitorteam' ],
        'standings': [ 'arb', 'club', 'conceded', 'day', 'defaults',
                       'draw', 'ent', 'forfeited', 'initi', 'lost',
                       'penalties', 'points', 'pos', 'quotient',
                       'scored', 'win' ],
        'subCompetitions': [ 'id', 'name']
      }
    },
    lives: {
      url: 'lives.php',
      type: 'GET',
      desc: 'Live games',
      fields: {
        'category' : null,
        'matchs': [ 'awayscore', 'awayteam', 'date', 'datetime', 'homescore',
                    'hometeam', 'link', 'running', 'time', 'upcoming' ],
        'title': null
    },
    search: {
      url: 'search.php',
      desc: 'Search tool'
    }
  }
};
