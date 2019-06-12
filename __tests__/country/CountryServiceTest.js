import CountryService from '../../server/graphql/service/country/CountryService';

let country = null;

beforeEach( ()=>{
	country = new CountryService({id:'Nigeria', mode:'name'});
});
describe('country service', () => {
	it('should get the country name using[ISO, name, Phone, areaCode] mode', ()=> {
		expect(country.name()).toBe('Nigeria');
	});

	it('should get country continent', ()=>{
		expect(country.continent()).toBe('Africa');
	});

	it('should get country phone', ()=>{
		expect(country.phone()).toBe('234');
	});

	it('should get country areaCode', ()=>{
		expect(country.areaCode()).toBe('923768');
	});

	it('should get country capital', ()=>{
		expect(country.capital()).toBe('Abuja');
	});


});
