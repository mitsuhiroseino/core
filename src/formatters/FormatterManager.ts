import ProductionManager from '../factory/ProductionManager';
import AnyFormatter from './AnyFormatter';
import BooleanFormatter from './BooleanFormatter';
import DateFormatter from './DateFormatter';
import factory from './FormatterFactory';
import NoopFormatter from './NoopFormatter';
import NumberFormatter from './NumberFormatter';
import ObjectFormatter from './ObjectFormatter';
import StringFormatter from './StringFormatter';

const PRODUCTION_MANAGER = new ProductionManager({
  factory,
  products: [
    new NoopFormatter(),
    AnyFormatter,
    BooleanFormatter,
    DateFormatter,
    NumberFormatter,
    ObjectFormatter,
    StringFormatter,
  ],
});
export default PRODUCTION_MANAGER;
