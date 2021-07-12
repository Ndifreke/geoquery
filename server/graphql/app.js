const { graphql, buildSchema } = require('graphql');
const querySchema = require('./queryTypeBuilder');
const typeSchema = require('./schemaBuilder');
const rootServices = require('./serviceBuilder');
const { typeSchemaMerger } = require('./util');

const querySchemaMerge = typeSchemaMerger(querySchema, typeSchema);
const types = buildSchema(querySchemaMerge);

module.exports = async function(query){
	const response = await graphql(types, query, rootServices);
	return Promise.resolve(response);
};

module.exports.schemaStructure = querySchemaMerge;
