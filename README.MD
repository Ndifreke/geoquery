# Geoquery
A Geographical data serving services written in Node.js and graphQL

[![Build Status](https://travis-ci.org/Ndifreke/geoquery.svg?branch=develop)](https://travis-ci.org/Ndifreke/geoquery)
[![codecov](https://codecov.io/gh/Ndifreke/geoquery/branch/develop/graph/badge.svg)](https://codecov.io/gh/Ndifreke/geoquery)
[![Maintainability](https://api.codeclimate.com/v1/badges/d92ee6bda46f7c661ea5/maintainability)](https://codeclimate.com/github/Ndifreke/geoquery/maintainability)

## About
Geoquery serves Geographical data from static JSON files located in the `/server/source` directory of the project. On first time of starting the server the JSON data is read into memory and subsequent request are served from the memory.

## Getting Started

Open your terminal and run
```sh
git clone https://github.com/Ndifreke/geoquery.git
```

```sh
cd geoquery
```

```sh
npm install
```

```sh
npm run start
 ``` 

## Usage

#### Send GET request Request
```
{                 
  continent {
    countries
  }
}
```
#### Response request Request

```
{
  data:{
    countries:[ Africa, Europe, Asia, North America,
                 South America, Australia, Antarctica ]
  }
}
```

## Technology
- [@graphql](https://github.com/graphql)
- [Node.js](https://nodejs.org/en/)

## Authors
 Ndifreke [@ndifreke](https://github.com/ndifreke)
## Credit
[@rancheta](https://github.com/rancheta/countryRegionCityJSON) Hosted original Geographical JSON data


