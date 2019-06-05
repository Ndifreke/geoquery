import queryHandler from './graphql/builder';

const geoquery = async (query, callback) => {
	const result = await queryHandler(query);
	if(typeof callback === 'function')
		callback(result);
	return result;
};

export { geoquery };
