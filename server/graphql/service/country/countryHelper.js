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
 * @param {string} modeIdentifier value that identifes the country
 */
	lookupBy(lookupMode, modeIdentifier){
		const getCountry = (identifier) => {
			for (const countryName in this.countries) {
				const country = this.countries[countryName];
				if (lookupMode in country && country[lookupMode] === identifier) 
					return country;
			}
			return null;
		};
		const { phone, areaCode, iso , countryName: name } = CountryHelper.LOOKUP_MODES;
		switch(lookupMode){
		case phone    : 
		case iso      :
		case name     : 
		case areaCode : 
			return getCountry(modeIdentifier);
		// dont waste time looking up unknown country lookup mode
		default: return null;
		}

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

}

CountryHelper.LOOKUP_MODES = {
	countryName : 'country',
	iso    			: 'ISO',
	phone  			: 'Phone',
	areaCode		: 'area'
};

export default new CountryHelper();