const util = require('../util');
const countryQuery = require('./countryQuery');
const continentQuery = require('./continetQuery');

const queries = util.typeSchemaMerger(
	countryQuery,
	continentQuery
);

module.exports = `type Query {${queries} 
},\n`;

