const app = require('./graphql/app');
const util = require('./graphql/util');
import microServer from './microServer'
const dotenv = require('dotenv');
/**
 * Make a geographical query and get the result
 * @param {String} graphql query
 * @param {Function} callback  CallBack function that can receive the query result
 * @returns {Promise} Promise that resolves to the query result
 */
const geoquery = async function (query, callback?: (result: any) => void) {
	const result = await app(query);
	if (typeof callback === 'function') callback(result);
	return result;
};

export default geoquery;

/**
 * Start a microserver that launches the web browser to demo the project
 * @param port The port number to use. defaults to Process.env.PORT or 8080 
 */
export const demo = (port: number = 8080) => {
	dotenv.config();
	microServer({ port, callback: util.startBrowser })
};

export const createServer = microServer
