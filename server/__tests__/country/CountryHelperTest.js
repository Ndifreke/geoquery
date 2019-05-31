import countryHelper from '../../graphql/service/country/countryHelper';

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

});
