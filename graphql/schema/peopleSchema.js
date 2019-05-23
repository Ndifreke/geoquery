const  {country, continent, searchPlaces }  = require("./typeDefinations");
const {typeMerge, serviceMerge } = require("./graphQLUtil")

const query = 
`
type Query {
    getPeople: ID,
    isMale (name: Int): Int!,
    country: Country,
    places : SearchPlaces,
}
`;

const finalMerge = typeMerge(country, continent, query, searchPlaces);
module.exports = finalMerge;



