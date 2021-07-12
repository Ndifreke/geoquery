const queryHandler = require('./graphql/app');
import example from './example';
/**
 * Make a geographical query and get the result
 * @param {String} graphql query
 * @param {Function} callback  CallBack function that can receive the query result
 * @returns {Promise} Promise that resolves to the query result
 */
const geoquery = async function (query, callback?:(result:any)=> void) {
	const result = await queryHandler(query);
	if (typeof callback === 'function') callback(result);
	return result;
};

export default geoquery;
export  const demo = example;
