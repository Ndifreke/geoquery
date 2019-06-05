import CountryService from './country/CountryService';
import ContinetService from './continent/ContinetService';
const  { continents } = ContinetService;

const root = {
	country: ({id, mode}) => {
		return new CountryService({id, mode});
	}, 

	continents : () => {
		return continents() ;
	}
};

export default root;
