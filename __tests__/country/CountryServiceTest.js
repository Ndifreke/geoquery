import CountryService from '../../server/graphql/service/country/CountryService';

describe('country service', () => {
	it('should get the country name using[ISO, name, Phone, areaCode] mode', ()=> {
		const country = new CountryService({id:'Nigeria', mode:'name'});
		expect(country.name()).toBe('Nigeria');
	});
});
