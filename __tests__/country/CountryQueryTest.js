import geoquery from '../../server/index';

describe('country geoquery request', ()=> {
	it('should request for country data', async ()=>{
		const response = await geoquery(`{ 
    country( id:"Nigeria", mode:"name"){
      name
      phone
      areaCode
      continent
      capital
    }
  }`);
		const { country } = response.data;
		expect(country.name).toBe('Nigeria');
	});
});
