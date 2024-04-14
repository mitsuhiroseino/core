import Factory from '../factory/Factory';
import { IRelationalOperator, RelationalOperatorConfig } from './types';

const FACTORY = new Factory<IRelationalOperator, RelationalOperatorConfig>({
  category: 'relationaloperator',
});
export default FACTORY;
