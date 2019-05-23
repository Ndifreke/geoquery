const { graphql, buildSchema } = require("graphql");
const peopleShema = require("./schema/peopleSchema");
const continentSchema = require("./schema/peopleSchema").Continent;
const services = require("./services/peopleService");

const shema = buildSchema(peopleShema);

module.exports = async (query) => {
    const response = await graphql(shema, query, services);
    return Promise.resolve(response);
}