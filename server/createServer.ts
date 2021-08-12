// import { createServer } from 'http'
// const { schemaStructure } = require('./graphql/app');
// const { readFileSync } = require('fs');
// const dotenv = require('dotenv');
// import geoquery from './index';
// //const util = require('./graphql/util');

// //const startBrowser = util.startBrowser;
// dotenv.config();

// const getHTML = function () {
// 	const htmlTemplate = readFileSync(__dirname + '/index.html');
// 	const html = htmlTemplate.toString().replace('#graphQLschema', schemaStructure);
// 	return html;
// };

// const handleGetRequest = function (req, res) {
// 	res.end(getHTML());
// };

// const handlePostRequest = function (req, res) {
// 	req.on('data', async (data) => {
// 		console.log('POST:\n', data.toString());
// 		const result = await geoquery(data.toString());
// 		res.end(JSON.stringify(result, null, 2));
// 	});
// };

// /**
//  * start a web browser to demo the project
//  */
// const runDemo = function () {

// 	const app = createServer();

// 	app.on('request', async function (req, res) {

// 		switch (req.method) {
// 			case 'GET':
// 				handleGetRequest(req, res);
// 				break;

// 			case 'POST':
// 				handlePostRequest(req, res);
// 				break;
// 		}
// 	});

// 	const PORT = 8080;
// 	app.listen(PORT);

// 	console.log(`Listening on`, PORT, `http://localhost:${PORT}`);
// };
// console.log("Running Develep")
// runDemo();


import microServer from './microServer'
microServer({port:8080})
