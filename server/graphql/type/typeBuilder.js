const util = require('../util');
const countryType = require('./countryType');
const continentType = require('./continentType');

const typeSchema = util.typeSchemaMerger(
	countryType,
	continentType
);
module.exports = typeSchema;

