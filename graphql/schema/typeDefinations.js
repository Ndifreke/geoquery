module.exports.continent = `
type Continent {
    getCountries(country : String): Country
}
`;

const continents =
`
enum Continent {
Africa,
Europe,
Asia,
North America,
South America,
Australia,
Antarctica,
}
`;

module.exports.country =
`
type Country {
    getStates: [String]
    stateCount : Int
}
`;

const state = 
 `
    type State {
    name: String,
    location : Country,
    continent: Continent,
}
`;

//example query

module.exports.searchPlaces  = `union SearchPlaces = Country  | Continent`;

const query =
`
{
search(text: "query") {
    __typename
    ... on Country{
    stateCount,
    getState,

    ... on State{
    location
    continent
    }
  }
}
`;
