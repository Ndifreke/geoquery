import util from '../util';
import countryQuery from './countryQuery';
import continentQuery from './continetQuery';

const queries = util.typeSchemaMerger(
	countryQuery,
	continentQuery
);

export default `type Query {${queries} 
},\n`;

