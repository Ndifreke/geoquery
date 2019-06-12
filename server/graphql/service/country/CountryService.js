import CountryHelper from './countryHelper';
import ContinentService  from '../continent/KontinetService';
const { continent } = ContinentService;

class CountryService {

	constructor({ id, mode }) {
		this.country = CountryHelper.loadCountry({ id, mode });
	}

	/**
	 * get the name of this country
	 * @returns {string} name of country
	 */
	name() {
		return this.country.country;
	}

	/**
	 * get the areaCode of this country
	 * @returns {string} name of country
	 */
	areaCode() {
		return this.country.area;
	}

	/**
	 * get the capital of this country
	 * @returns {string} name of country
	 */
	capital() {
		return this.country.capital;
	}

	/**
	 * get the phone code of this country
	 * @returns {string} name of country
	 */
	phone() {
		return this.country.Phone;
	}

	/**
	 * get continet this country belongs to
	 * @returns {string} name of country
	 */
	continent() {
		return continent(this.country.Continent);
	}

}

export default CountryService;
