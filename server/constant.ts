const path = require('path');
const SERVER_PATH = __dirname;
const DATA_SOURCE_PATH = path.join(SERVER_PATH, './geo-data');

enum DATA_SOURCE_PATH_FOLDERS_NAMES  {
    CountryState = 'country_state',
    CountryStateCity = 'country_state_city'
}

export  { DATA_SOURCE_PATH,DATA_SOURCE_PATH_FOLDERS_NAMES };
