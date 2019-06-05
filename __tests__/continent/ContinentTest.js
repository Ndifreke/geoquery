import ContinetService from '../../server/graphql/service/continent/KontinetService';

const { continent } = ContinetService;

describe('continent test', () => {

	it('should match the right continent if the inital matches', () =>{
		expect(continent('AF')).toBe('Africa');
		expect(continent('EU')).toBe('Europe');
		expect(continent('XA')).toBe(null);
	});

});
