# Geoquery
A Geographical data serving services written in Node.js and graphQL

[![Build Status](https://travis-ci.org/Ndifreke/geoquery.svg?branch=develop)](https://travis-ci.org/Ndifreke/geoquery)
[![codecov](https://codecov.io/gh/Ndifreke/geoquery/branch/develop/graph/badge.svg)](https://codecov.io/gh/Ndifreke/geoquery)
[![Maintainability](https://api.codeclimate.com/v1/badges/d92ee6bda46f7c661ea5/maintainability)](https://codeclimate.com/github/Ndifreke/geoquery/maintainability)

## Intro
Geoquery serves Geographical data from static JSON files located in the `/server/source` directory of the project. On first time of starting the server the JSON data is read into memory and subsequent request are served from the memory.

## Getting Started

In terminal
```sh
git clone https://github.com/Ndifreke/geoquery.git

cd geoquery

npm install
```
```sh
#Opens web browser to inspect request
npm run demo 
 ``` 


## Send GET request Request
```js
const geoquery = require('./server');

const query = 
`{
  continent {
    countries
  },
  country(id: "Nigeria", mode: "name"){
    phone
  }
}`

const result =  await geoquery(query);


```
## Result:

```js
{
  data:{
    countries:[ Africa, Europe, Asia, North America,
                 South America, Australia, Antarctica ]
  },
  country {
    phone: 234
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


