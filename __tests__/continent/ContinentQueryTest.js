import geoquery from '../../server/index';

describe('country geoquery request', ()=> {
	it('should request for country data', async ()=>{
		const response = await geoquery(`{ continents }`,
			(result) =>{
				const { continents } = result.data;
				expect(continents.length).toBe(7);
			});
		const { continents } = response.data;
		expect(continents.length).toBe(7);
	});
});
