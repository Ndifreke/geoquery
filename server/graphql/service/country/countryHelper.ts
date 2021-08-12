import { CountryQueryArgTypes } from "../types";
import CountryService, { CountryType } from "./CountryService";

const fs = require('fs');
const path = require('path');

const { DATA_SOURCE_PATH } = require('../../../constant');

class CountryHelper {
	private static countries: Record<string, CountryType>
	static LOOKUP_MODES = {
		countryName: 'country',
		iso: 'ISO',
		phone: 'Phone',
		areaCode: 'area'
	};
	constructor() {
		if (CountryHelper.countries) {
			CountryHelper.countries = CountryHelper.countries;
		} else {
			this.readCountryFile();
			CountryHelper.countries = CountryHelper.countries;
		}
	}

	static getCountries() {

		return Object.keys(CountryHelper.countries).map((countryName) =>{

		 const country = new CountryService({ mode: 'name', id: countryName })
	
		 return country
		})
	}

	/**
	 * Get a country by it name
	 * @param {string} name argument that identifies a country
	 * @returns {object} country object
	 */
	getCountryByName(name) {
		const nameMode = CountryHelper.LOOKUP_MODES.countryName;
		return this.lookupBy(nameMode, name);
	}

	/**
	 * Get a country by it area code
	 * @param {string} areaCode argument that identifies a country
	 * @returns {object} country object
	 */
	getCountryByAreaCode(areaCode) {
		const areaCodeMode = CountryHelper.LOOKUP_MODES.areaCode;
		return this.lookupBy(areaCodeMode, areaCode);
	}

	/**
	 * Get a country by it phone number code. 
	 * The phone number should be without the plus character
	 * @param {string} phone argument that identifies a country
	 * @returns {object} country object
	 */
	getCountryByPhone(phone) {
		const phoneMode = CountryHelper.LOOKUP_MODES.phone;
		return this.lookupBy(phoneMode, phone);
	}

	/**
	 * Get a country by it ISO number
	 * @param {string} iso argument that identifies a country
	 * @returns {object} country object
	 */
	getCountryByISO(iso) {
		const isoMode = CountryHelper.LOOKUP_MODES.iso;
		return this.lookupBy(isoMode, iso);
	}

	/**
 * Search for a country using one of the modes defined by countryHelper.LOOKUP_MODE.
 * A match is found if the value country[LOOKUP_MODE] == [modeIdentifier]
 * @param {CountryHelper.LOOKUP_MODES} lookupMode mode used to search for the country
 * @param {string} countryIdentifier value that identifes the country
 */
	lookupBy(lookupMode, countryIdentifier) {
		let country: CountryType | null = null;
		const getCountry = (identifier) => {
			let result: CountryType | null = null;
			for (const countryName in CountryHelper.countries) {
				const country = CountryHelper.countries[countryName];
				if (lookupMode in country && new RegExp(`^${identifier}$`, 'i').test(country[lookupMode])) {
					result = country;
					break;
				}
			}
			return result;
		};
		const { phone, areaCode, iso, countryName: name } = CountryHelper.LOOKUP_MODES;
		switch (lookupMode) {
			case phone:
			case iso:
			case name:
			case areaCode:
				country = getCountry(countryIdentifier);
			// dont waste time looking up unknown country lookup mode
		}
		return country;
	}

	//TODO add country lookup by capital

	/**
	 * Parse country data and store it by name in an object
	 * @param { String } coutryFile JSON string
	 */
	parseCountryFile(coutryFile) {
		try {
			const countryJSON = JSON.parse(coutryFile);
			CountryHelper.countries = {};
			for (const data of countryJSON) {
				if (data.country != '') {
					CountryHelper.countries[data.country] = data;
				}
			}
		} catch (error) {
			throw ('could not read country file\n' + error);
		}
	}

	readCountryFile() {
		const country = fs.readFileSync(path.join(DATA_SOURCE_PATH, 'countries.json'));
		return this.parseCountryFile(country);
	}
	static isNameMode(input) {
		return /^.*name.*$/ig.test(input);
	}

	static isISOMode(input) {
		return /^.*iso.*$/ig.test(input);
	}

	static isPhoneMode(input) {
		return /^.*(phone|number|mobile|cell).*$/ig.test(input);
	}

	static isAreaCodeMode(input) {
		return /^.*area.*$/ig.test(input);
	}

	/**
	 * Make a prediction that to determine if the input matches any
	 * of the modes of searching for a country
	 * @param {string} input to make prediction from
	 * @returns {LOOKUP_MODES} if there is a match or null if no match 
	 */
	static predictLookupMode(input) {
		let mode;
		if (CountryHelper.isAreaCodeMode(input)) {
			mode = CountryHelper.LOOKUP_MODES.areaCode;
		} else if (CountryHelper.isPhoneMode(input)) {
			mode = CountryHelper.LOOKUP_MODES.phone;
		} else if (CountryHelper.isISOMode(input)) {
			mode = CountryHelper.LOOKUP_MODES.iso;
		} else if (CountryHelper.isNameMode(input)) {
			mode = CountryHelper.LOOKUP_MODES.countryName;
		}
		return mode;
	}

	/**
 * Load a country given the Id that identifies the country and the mode to use in looking up 
 * the country
 * @param {id} param0 an object containing {id, mode} that will be used for searching a country
 * @returns {Object} country
 */
	static loadCountry = ({ id, mode }: CountryQueryArgTypes) => {
		let country;
		switch (CountryHelper.predictLookupMode(mode)) {
			case CountryHelper.LOOKUP_MODES.areaCode:
				country = countryHelper.getCountryByAreaCode(id);
				break;
			case CountryHelper.LOOKUP_MODES.countryName:
				country = countryHelper.getCountryByName(id);
				break;
			case CountryHelper.LOOKUP_MODES.phone:
				country = countryHelper.getCountryByPhone(id);
				break;
			case CountryHelper.LOOKUP_MODES.iso:
				country = countryHelper.getCountryByISO(id);
				break;
		}
		return country;
	};

}

// CountryHelper.LOOKUP_MODES = {
// 	countryName : 'country',
// 	iso    			: 'ISO',
// 	phone  			: 'Phone',
// 	areaCode		: 'area'
// };

const countryHelper = new CountryHelper();



//CountryHelper.loadCountry = loadCountry;
export default CountryHelper;
