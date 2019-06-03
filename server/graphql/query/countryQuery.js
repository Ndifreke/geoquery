import util from '../util';
import { countrySchema } from '../type';

const countryQuery = 
`
type Query{
  country(id : String!, mode: String ): Country 
}
`;

export default util.typeSchemaMerger(countryQuery, countrySchema);

