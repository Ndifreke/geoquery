import CountryService from './service/country/CountryService';
import ContinetService from './service/continent/ContinetService';
import { CountryQueryArgTypes } from './service/types';
import CountryHelper from './service/country/countryHelper'
const { continents } = ContinetService;

const root = {
	country: function (arg: CountryQueryArgTypes) {
		return new CountryService(arg);
	},

	continents: function () {
		return continents();
	},
	countries: () => {
		const countries = CountryHelper.getCountries()
		return countries
	}
};

module.exports = root;
