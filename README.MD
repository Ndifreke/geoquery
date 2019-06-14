# Geoquery

[Geoquery](https://github.com/ndifreke/geoquery) is a geographical data serving services written in Node.js and graphQL

[![Build Status](https://travis-ci.org/Ndifreke/geoquery.svg?branch=develop)](https://travis-ci.org/Ndifreke/geoquery)
[![codecov](https://codecov.io/gh/Ndifreke/geoquery/branch/develop/graph/badge.svg)](https://codecov.io/gh/Ndifreke/geoquery)
[![Maintainability](https://api.codeclimate.com/v1/badges/d92ee6bda46f7c661ea5/maintainability)](https://codeclimate.com/github/Ndifreke/geoquery/maintainability)

## Intro

Geoquery serves Geographical data from static JSON files located in the `geoquery/server/geo-data` directory of the project. On first time of starting the server the JSON data is read into memory and subsequent request are served from the memory.

## Getting Started

```sh
$ npm i geoquery
```

```sh
#Opens web browser to inspect request
npm run demo
```

## Send GET request Request

```js
const geoquery = require('geoquery');

const query = `{
  countries(continent : "Asia" ) {
    names
    countries
  },
  country(id: "Nigeria", mode: "name"){
    phone
    continent
    capital
  }
  continents
}`;

geoquery(query).then((result) => {
  console.log(result);
});
```

## Result:

```js
{
  data:{
    countries {
      /* countries coming in next release */
      names    : ["China", "Iraq", "Japan", ...],
      countries: []
    },
    country {
      phone    : 234,
      continent: "Africa",
      capital  : "Abuja"
  }
   countinents:[ Africa, Europe, Asia, North_America,
                 South_America, Australia, Antarctica ]
}
}
```

## About

### Authors

- Ndifreke [@ndifreke](https://github.com/ndifreke)

### Technology

- [@graphql](https://github.com/graphql)
- [Node.js](https://nodejs.org/en/)

### Credit

- [@rancheta](https://github.com/rancheta/countryRegionCityJSON) Hosted original Geographical JSON data

### Changelog
