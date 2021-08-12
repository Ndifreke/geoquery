const util = require('./util');
const countryQuery = require('./service/country/countryType.graphql');
const continentQuery = require('./service/continent/continentType.graqhql');
const stateQuery = require('./service/state/stateType.graphql');
const countriesQuery = require('./service/countries/countriesType.graphql');
const cityQuery =  require('./service/city/cityType.graphql');

const queries = util.typeSchemaMerger(
	countryQuery,
	continentQuery,
	stateQuery,
	countriesQuery,
	cityQuery
);

module.exports = `type Query {${queries} 
},\n`;

