const CountryHelper = require('../../server/graphql/service/country/countryHelper');
const predictLookup = CountryHelper.predictLookupMode;
const countryHelper = new CountryHelper();
const LOOKUP_MODES = CountryHelper.LOOKUP_MODES;

describe('Country Helper', () => {

	it('should find a country by name', () => {
		expect(countryHelper.getCountryByName('Nigeria').Phone).toBe('234');
		expect(countryHelper.getCountryByName('Ghana').Phone).toBe('233');
	});

	it('should find a country by phone', () => {
		expect(countryHelper.getCountryByPhone('234').country).toBe('Nigeria');
		expect(countryHelper.getCountryByPhone('233').country).toBe('Ghana');
	});

	it('should find a country by area', () => {
		expect(countryHelper.getCountryByAreaCode('9250').country).toBe('Cyprus');
		expect(countryHelper.getCountryByAreaCode('78866').country).toBe('Czech Republic');
	});

	it('should find a country by area', () => {
		expect(countryHelper.getCountryByISO('DE').country).toBe('Germany');
		expect(countryHelper.getCountryByISO('DJ').country).toBe('Djibouti');
	});

	it('should predict country lookup by name', ()=> {
		expect(predictLookup('namE')).toBe(LOOKUP_MODES.countryName);
		expect(predictLookup('country name')).toBe(LOOKUP_MODES.countryName);
		expect(predictLookup('name of country')).toBe(LOOKUP_MODES.countryName);
		expect(predictLookup('the name country')).toBe(LOOKUP_MODES.countryName);
		expect(predictLookup('ame country')).not.toBe(LOOKUP_MODES.countryName);
		expect(predictLookup('n ame')).not.toBe(LOOKUP_MODES.countryName);
	});

	it('should look up country provided name mode and Country ID', () =>{
		expect(CountryHelper.loadCountry({ mode: 'name', id:'Nigeria' } ).country).toBe('Nigeria');
		expect(CountryHelper.loadCountry({ mode: 'the name country', id:'algeria' } ).country).toBe('Algeria');
	});

	it('should look up country provided Phone mode and Country ID', () =>{
		expect(CountryHelper.loadCountry({ mode: 'Phone', id:'234' } ).country).toBe('Nigeria');
	});

	it('should look up country provided ISO mode and Country ID', () =>{
		expect(CountryHelper.loadCountry({ mode: 'iso', id:'ng' } ).country).toBe('Nigeria');
		expect(CountryHelper.loadCountry({ mode: 'name ISO', id:'NG' } ).country).toBe('Nigeria');
	});

	it('should look up country provided areaCode mode and Country ID', () =>{
		expect(CountryHelper.loadCountry({ mode: 'area', id:'923768' } ).country).toBe('Nigeria');
		expect(CountryHelper.loadCountry({ mode: 'the area', id:'923768' } ).country).toBe('Nigeria');
	});

	it('should return null for country that does not exist', ()=>{
		expect(CountryHelper.loadCountry({ mode: '', id:'923768' } )).toBe(null);
		expect(CountryHelper.loadCountry({ mode: '43', id:'923768' } )).toBe(null);
	});
});
