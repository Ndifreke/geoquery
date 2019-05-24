const stateSchema = require("./stateSchema");
const continentSchema = require("./continentSchema");
const countrySchema = require("./countrySchema");
const citySchema = require("./citySchema");
const { schemaMerge } = require("../util/mergeUtil");


module.exports = schemaMerge(countrySchema, continentSchema,stateSchema);

