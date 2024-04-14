import FactoryOwner from '../factory/ProductionManager';
import AndFilter from './AndFilter';
import AnyFilter from './AnyFilter';
import ArrayFilter from './ArrayFilter';
import BooleanFilter from './BooleanFilter';
import DateFilter from './DateFilter';
import factory from './FilterFactory';
import NumberFilter from './NumberFilter';
import OrFilter from './OrFilter';
import RegexFilter from './RegexFilter';
import StringFilter from './StringFilter';

const OWNER = new FactoryOwner({
  factory,
  products: [
    AndFilter,
    AnyFilter,
    ArrayFilter,
    BooleanFilter,
    DateFilter,
    NumberFilter,
    OrFilter,
    RegexFilter,
    StringFilter,
  ],
});
export default OWNER;
