import { createServer } from 'http';
import queryHandler, {schemaStructure}  from './graphql/builder';
import { readFileSync } from 'fs';
import dotenv from 'dotenv';

dotenv.config();

const htmlTemplate = readFileSync(__dirname + '/index.html');
const html = htmlTemplate.toString().replace('#graphQLschema', schemaStructure);
const app = createServer();

app.on('request', async (req, res) => {
	switch (req.method) {
	case 'GET':
		res.end(sendForm());
		break;

	case 'POST':
		req.on('data', (data) => {
			queryAPI(req, res, data.toString());
		});
		break;
	}
});

const sendForm = () => {
	return html;
};

const queryAPI = async (req, res, data) => {
	const result = await queryHandler(data);
	res.end(JSON.stringify(result), null, 2);
};

app.listen(process.env.PORT);
