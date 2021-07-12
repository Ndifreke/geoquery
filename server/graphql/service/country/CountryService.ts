import CountryHelper from './countryHelper';
const { continent } = require('../continent/ContinetService');
import StateService from '../state/StateService'
import { CountryQueryArgTypes } from '../types';

interface CountryServiceType {
	iso: () => string,
	iso3: () => string
	iso_numeric: () => string,
	fips: () => string,
	name: () => string,
	capital: () => string,
	area: () => string,
	population: () => string,
	continent: () => string,
	tld: () => string,
	currencyCode: () => string,
	currencyName: () => string,
	phone: () => string,
	postalCodeFormat: () => string,
	postalCodeRegex: () => string,
	languages: () => string
}

export type CountryType = {
	ISO: string,
	ISO3: string,
	ISO_Numeric: string,
	fips: string,
	country: string,
	capital: string,
	area: string,
	Population: string,
	Continent: string,
	tld: string,
	CurrencyCode: string,
	CurrencyName: string,
	Phone: string,
	Postal_Code_Format: string,
	Postal_Code_Regex: string,
	Languages: string
}

class CountryService implements CountryServiceType {
	private countryService: CountryType;

	constructor({ id, mode }: CountryQueryArgTypes) {
		this.countryService = CountryHelper.loadCountry({ id, mode });

	}
	iso3() {
		return this.countryService.ISO3
	}
	iso_numeric() {
		return this.countryService.ISO_Numeric
	}
	fips() {
		return this.countryService.fips
	}
	population() {
		return this.countryService.Population
	}
	tld() {
		return this.countryService.tld
	}
	currencyCode() {
		return this.countryService.CurrencyCode
	}
	currencyName() {
		return this.countryService.CurrencyName
	}
	postalCodeFormat() {
		return this.countryService.Postal_Code_Format
	}
	postalCodeRegex() {
		return this.countryService.Postal_Code_Regex
	}
	languages() {
		return this.countryService.Languages
	}

	/**
	 * get the name of this country
	 * @returns {string} name of country
	 */
	name() {
		return this.countryService.country;
	}

	/**
	 * get the areaCode of this country
	 * @returns {string} name of country
	 */
	area() {
		return this.countryService.area;
	}

	/**
	 * get the capital of this country
	 * @returns {string} name of country
	 */
	capital() {
		return this.countryService.capital;
	}

	/**
	 * get the phone code of this country
	 * @returns {string} name of country
	 */
	phone() {
		return this.countryService.Phone;
	}

	/**
	 * get continet this country belongs to
	 * @returns {string} name of country
	 */
	continent() {
		return continent(this.countryService.Continent);
	}

	states() {
		const states = StateService.getService(this).getStates()
		return states
	}
	iso() {
		return this.countryService.ISO
	}

}

export default CountryService;

