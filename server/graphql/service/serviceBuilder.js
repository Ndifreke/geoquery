const CountryService = require('./country/CountryService');
const ContinetService = require('./continent/ContinetService');
const { continents } = ContinetService;

const root = {
	country: function({ id, mode }){
		return new CountryService({id, mode});
	}, 

	continents : function(){
		return continents() ;
	}
};

module.exports = root;
