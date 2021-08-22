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

## Deploy as Node Server

Geoquery includes a tiny node.js server that you can deploy as a microserives. The same server is deploy here https://geoquery.herokuapp.com/

This server has a very minimal configuration the `headers` is set to
`"Access-Control-Allow-Origin","*"`

Calling `createServer` function creates a simple node.js server.

```js
const geoquery ,{ createServer } = require('geoquery');

/**
 * @param port Request Listening PORT number
 * @param callback Executed when PORT is succesfully binded
 **/

createServer({port:process.env.PORT, callback: ({port}) =>{

}})
```

Create Server has interface

```js
interface MicroServerArgType {
  port: number
  callback : (arg:{port: number}) => void
}
```

The PORTS is resololved following the order:

- `{port}` passed as argument to `createServer`
- `process.env.PORT` if port is not provided
- `80` if port or process.env.PORT is undefined

## Not using Micro server. Send GET request Request

```js
const geoquery = require("geoquery");

const query = `{
  countryByIso :country(id:"NG", mode: "iso"){						
    name						
    states {								
      name							
    }												
  }
    
  countryByPhone :country(id:"234", mode: "phone"){
    name						
    states {								
      name							
    }												
  }

  countryByName: country(id:"angola", mode: "name"){
  name						
  states {								
    name							
  }												
}

  continents
					
  countries {					
  name						
  phone						
  states {							
    name
    cities{
      name
    }						
  }					
}
}	
`;

geoquery(query).then((result) => {
  console.log(result);
});
```

## Types

```js
type Country {
  iso:  String,
  iso3:  String
  iso_numeric:  String,
  fips:  String,
  name:  String,
  capital:  String,
  area:  String,
  population:  String,
  continent:  String,
  tld:  String,
  currencyCode:  String,
  currencyName:  String,
  phone:  String,
  postalCodeFormat:  String,
  postalCodeRegex:  String,
  languages:  String,
  states: [State!]!
}

enum Continents { 
  Africa, 
  Europe, 
  Asia, 
  North_America,
  South_America,
  Australia,
  Antarctica
}

type State {
  countryId: String,
  adminCode1: String,
  countryName: String,
  fclName: String,
  countryCode: String,
  longitude: String,
  fcodeName: String,
  toponymName: String,
  fcl: String,
  numberOfChildren: Int,
  name: String,
  fcode: String,
  geonameId: Int,
  latitude: String,
  adminName1: String,
  population: Float
  country: Country!
  cities: [City!]!
}

type City{
  country:Country!
  state:State!
  geonameId: String,
  name: String,
  asciiName: String,
  alternateNames: [String]!,
  latitude: String,
  longitude: String,
  featureClass: String,
  featureCode: String,
  countryCode: String,
  cc2: String,
  admin1Code: String,
  admin2Code: String,
  admin3Code: String,
  admin4Code: String,
  population: String,
  elevation: String,
  dem: String,
  timezone: String,
}
```

## Query Types
```js
//mode is any of "phone" | "areaCode" | "iso" | "name"
type Query {
 country(id : String!, mode: String): Country,
 continents : [Continents!]!
 states : [State!]!
 countries : [Country!]!
 city : [City!]! 
},
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
