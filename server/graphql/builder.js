import { graphql, buildSchema } from 'graphql';
import schemaBuilder from './schema/schemaBuilder';
import queryBuilder from './query/queryBuilder';
import { schemaMerge, serviceMerge } from './util/mergeUtil';
import services from './service/serviceBuilder';

const schemaTypes = schemaMerge(schemaBuilder, queryBuilder);
const serviceTypes = serviceMerge({a: () =>{}});

const schema = buildSchema(schemaTypes);

export default async (query) => {
	const response = await graphql(schema, query, serviceTypes);
	return Promise.resolve(response);
};

export const schemaStructure = schemaTypes;
