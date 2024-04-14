import ProductionManager from '../factory/ProductionManager';
import EqualRelationalOperator from './EqualRelationalOperator';
import GreaterThanOrEqualRelationalOperator from './GreaterThanOrEqualRelationalOperator';
import GreaterThanRelationalOperator from './GreaterThanRelationalOperator';
import LessThanOrEqualRelationalOperator from './LessThanOrEqualRelationalOperator';
import LessThanRelationalOperator from './LessThanRelationalOperator';
import NotEqualRelationalOperator from './NotEqualRelationalOperator';
import factory from './RelationalOperatorFactory';

const PRODUCTION_MANAGER = new ProductionManager({
  factory,
  products: [
    EqualRelationalOperator,
    GreaterThanOrEqualRelationalOperator,
    GreaterThanRelationalOperator,
    LessThanOrEqualRelationalOperator,
    LessThanRelationalOperator,
    NotEqualRelationalOperator,
  ],
});
export default PRODUCTION_MANAGER;
