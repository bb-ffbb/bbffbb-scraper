# ffbb.com scraper

[![js-semistandard-style](https://img.shields.io/badge/code%20style-semistandard-brightgreen.svg?style=flat-square)](https://github.com/Flet/semistandard)
[![travis-ci](https://travis-ci.org/bb-ffbb/bbffbb-scraper.svg)](https://travis-ci.org/bb-ffbb/bbffbb-scraper)

Scraper library for the <http://www.ffbb.com> site.

## Usage

### Mine licensees

```
const scrapper = require('bbffbb-scraper');


const param = {
    firstName: "Pierre", // player firstname
    lastName: "Durand", // player lastname
    licenseId: null, // player license 
    gender: null, // player gender (M or F allowed). M is default value
    nationalId: null, // player national id
    birthDate: null, // player birth date (format DD/MM/YYYY)
};

scrapper.miners.mineLicense(param, (err, licensees) => {
    if(err) {
        console.error(err);
    } else {
        console.log(licensees);
    }
});
```

`firstName`, `lastName`, `licenseId` could be set with `*` to search part of value. (example : `firstname: "Pi*"`, `lastName: "*Dur"`)

