import util from '../util';
import countryType from './countryType';
import continentType from './continentType';


const typeSchema = util.typeSchemaMerger(
	countryType,
	continentType
);

export default typeSchema;

