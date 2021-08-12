const util = require('./util');
const countryType = require('./service/country/countrySchema.graphql');
const continentType = require('./service/continent/continentScheme.graphql');
const stateType = require('./service/state/stateSchema.graphql');
const citySchemaGraphql = require('./service/city/citySchema.graphql');
const typeSchema = util.typeSchemaMerger(
	countryType,
	continentType,
	stateType,
	citySchemaGraphql
);

module.exports = typeSchema;

