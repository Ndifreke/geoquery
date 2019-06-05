import { graphql, buildSchema } from 'graphql';
import querySchema from './query/queryBuilder';
import typeSchema from './type/typeBuilder';
import geographyServices from './service/serviceBuilder';
import util from './util';

const queryTypeMerge = util.typeSchemaMerger(querySchema, typeSchema);
console.log(queryTypeMerge);
const schema = buildSchema(queryTypeMerge);

export default async (query) => {
	const response = await graphql(schema, query, geographyServices);
	return Promise.resolve(response);
};

export const schemaStructure = queryTypeMerge;
