import ProductionManager from '../factory/ProductionManager';
import AnyComparator from './AnyComparator';
import ArrayComparator from './ArrayComparator';
import BooleanComparator from './BooleanComparator';
import factory from './ComparatorFactory';
import DateComparator from './DateComparator';
import LengthComparator from './LengthComparator';
import NumberComparator from './NumberComparator';
import StringComparator from './StringComparator';

const PRODUCTION_MANAGER = new ProductionManager({
  factory,
  products: [
    AnyComparator,
    ArrayComparator,
    BooleanComparator,
    DateComparator,
    LengthComparator,
    NumberComparator,
    StringComparator,
  ],
});
export default PRODUCTION_MANAGER;
