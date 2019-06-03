import CountryHelper from './countryHelper';

class CountryService {

	constructor({id, mode} ){
		this.country = CountryHelper.loadCountry({id, mode});
	}

	/**
	 * get the name of this country
	 * @returns {string} name of country
	 */
	name(){
		return this.country.country;
	}
  
	areaCode(){
	}

	phone(){

	}

}

export default CountryService;
