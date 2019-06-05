/* eslint-disable no-console */
import { createServer } from 'http';
import { schemaStructure } from './graphql/builder';
import { readFileSync } from 'fs';
import dotenv from 'dotenv';
import { geoquery} from './index';
import util from './graphql/util';

const startBrowser = util.startBrowser;

dotenv.config();

const getHTML = () => {
	const htmlTemplate = readFileSync(__dirname + '/index.html');
	const html = htmlTemplate.toString().replace('#graphQLschema', schemaStructure );
	return html;
};

const handleGetRequest = (req, res) => {
	res.end(getHTML());
};

const handlePostRequest = (req, res) => {
	req.on('data', async (data) => {
		console.log('POST:\n', data.toString());
		const result = await geoquery(data.toString());
		res.end(JSON.stringify(result,null, 2));
	});
};

/**
 * start a web browser to demo the project
 */
const runDemo = () => {
	const app = createServer();
  
	app.on('request', async (req, res) => {

		switch (req.method) {
		case 'GET':
			handleGetRequest(req, res);
			break;
    
		case 'POST':
			handlePostRequest(req, res);
			break;
		}
	});
  
	const PORT = 8080;
	app.listen(PORT);
 
	console.log('Listening on ', PORT);
	startBrowser(PORT);
};

runDemo();
export default runDemo;

