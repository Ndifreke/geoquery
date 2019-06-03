import CountryService from './country/CountryService';

const root = {
	country: ({id, mode}) => {
		return new CountryService({id, mode});
	}
};

export default root;
