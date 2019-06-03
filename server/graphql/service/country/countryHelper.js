import fs from 'fs';
import path from 'path';

import { DATA_SOURCE_PATH } from '../../../constant';

class CountryHelper {

	constructor() {
		if(CountryHelper.countries){
			this.countries = CountryHelper.countries;
		}else{
			this.readCountryFile();
			CountryHelper.countries = this.countries;
		}
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
	lookupBy(lookupMode, countryIdentifier){
		let country = null;
		const getCountry = (identifier) => {
			let result = null;
			for (const countryName in this.countries) {
				const country = this.countries[countryName];
				if (lookupMode in country && new RegExp(`^${identifier}$`,'i').test(country[lookupMode])) {
					result =  country;
					break;
				}
			}
			return result;
		};
		const { phone, areaCode, iso , countryName: name } = CountryHelper.LOOKUP_MODES;
		switch(lookupMode){
		case phone    : 
		case iso      :
		case name     : 
		case areaCode : 
			country = getCountry(countryIdentifier);
		// dont waste time looking up unknown country lookup mode
		}
		return country;
	}

	//TODO add country lookup by capital

	/**
	 * Parse country data and store it by name in an object
	 * @param {*} coutryFile 
	 */
	parseCountryFile(coutryFile) {
		try {
			const countryJSON = JSON.parse(coutryFile);
			this.countries = {};
			for (const data of countryJSON) {
				if(data.country != ''){
					this.countries[data.country] = data;
				}
			}
		} catch (error) {
			throw ('could not read country file\n' + error.message);
		}
	}

	readCountryFile() {
		const country = fs.readFileSync(path.join(DATA_SOURCE_PATH, 'countries.json'));
		return this.parseCountryFile(country);
	}
	static isNameMode(input){
		return /^.*name.*$/ig.test(input);
	}

	static isISOMode(input){
		return /^.*iso.*$/ig.test(input);
	}

	static isPhoneMode(input){
		return /^.*(phone|number|mobile|cell).*$/ig.test(input);
	}

	static isAreaCodeMode(input){
		return /^.*area.*$/ig.test(input);
	}

	/**
	 * Make a prediction that to determine if the input matches any
	 * of the modes of searching for a country
	 * @param {string} input to make prediction from
	 * @returns {LOOKUP_MODES} if there is a match or null if no match 
	 */
	static predictLookupMode(input){
		if(CountryHelper.isAreaCodeMode(input)){
			return CountryHelper.LOOKUP_MODES.areaCode;
		}
		if(CountryHelper.isPhoneMode(input)){
			return CountryHelper.LOOKUP_MODES.phone;
		}
		if(CountryHelper.isISOMode(input)){
			return CountryHelper.LOOKUP_MODES.iso;
		}
		if( CountryHelper.isNameMode(input) ){
			return CountryHelper.LOOKUP_MODES.countryName;
		}
		return null;
	}

}

CountryHelper.LOOKUP_MODES = {
	countryName : 'country',
	iso    			: 'ISO',
	phone  			: 'Phone',
	areaCode		: 'area'
};

const countryHelper = new CountryHelper();

/**
 * Load a country given the Id that identifies the country and the mode to use in looking up 
 * the country
 * @param {id} param0 an object containing {id, mode} that will be used for searching a country
 * @returns {Object} country
 */
const loadCountry = ({ id, mode }) => {
	let country = null;
	switch(CountryHelper.predictLookupMode(mode)){
	case CountryHelper.LOOKUP_MODES.areaCode:
		country = countryHelper.getCountryByAreaCode(id);
		break;
	case CountryHelper.LOOKUP_MODES.countryName:
		country = countryHelper.getCountryByName(id);
		break;
	case CountryHelper.LOOKUP_MODES.phone:
		country =  countryHelper.getCountryByPhone(id);
		break;
	case CountryHelper.LOOKUP_MODES.iso:
		country = countryHelper.getCountryByISO(id);
		break;
	}
	return country;
};
CountryHelper.loadCountry = loadCountry;
export  default CountryHelper ;
