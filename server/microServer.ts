import { createServer } from 'http'
const { schemaStructure } = require('./graphql/app');
const { readFileSync } = require('fs');
const dotenv = require('dotenv');
import geoquery from './geoquery';
<<<<<<< HEAD
dotenv.config();
=======
>>>>>>> e6700f9 (remove unused code)

const getHTML = function () {
    const htmlTemplate = readFileSync(__dirname + '/index.html');
    const html = htmlTemplate.toString().replace('#graphQLschema', schemaStructure);
    return html;
};

const handleGetRequest = function (req, res) {
    res.end(getHTML());
};

const handlePostRequest = function (req, res) {
    req.on('data', async (data) => {
        console.log('POST:\n', data.toString());
        const result = await geoquery(data.toString());
        res.end(JSON.stringify(result, null, 2));
    });
};

type MicroServerArgType = {
    port?: any
    callback?: (arg: any) => void
}

/**
 * Create A NodeJs server that servers the application
 * @param param0 
 */
const microServer = function ({ port, callback }: MicroServerArgType) {
    const PORT = port || process.env.PORT || 80

    const app = createServer();

    app.on('request', async function (req, res) {
        res.setHeader("Access-Control-Allow-Origin","*")
        switch (req.method) {
            case 'GET':
                handleGetRequest(req, res);
                break;

            case 'POST':
               
                handlePostRequest(req, res);
                break;
        }
    });

    app.listen(PORT);
    console.log(`Listening on`, PORT, `http://localhost:${PORT}`,process.env.PORT);
    callback?.({ port: PORT });
};

export default microServer
// module.exports = runDemo;
// export   {}

