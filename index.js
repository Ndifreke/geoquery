const http = require("http");
const query = require("./graphql/builder");
const fs = require("fs");
const schema = require("./graphql/schema/peopleSchema");

const htmlTemplate = fs.readFileSync(__dirname + "/index.html");
const html = htmlTemplate.toString().replace("#graphQLschema", schema);

const app = http.createServer();

app.on("request", async (req, res) => {
    console.log(req.method);
    switch (req.method) {
        case "GET":
            res.end(sendForm());
            break;

        case "POST":
            req.on("data", (data) => {
                queryAPI(req, res, data.toString());
            });
            break;
    }
});

const sendForm = () => {
    return html;
}

const queryAPI = async (req, res, data) => {
    const result = await query(data);
    res.end(JSON.stringify(result), null, 2);
}

app.listen(8081);