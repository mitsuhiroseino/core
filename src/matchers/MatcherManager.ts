import ProductionManager from '../factory/ProductionManager';
import AndMatcher from './AndMatcher';
import AnyMatcher from './AnyMatcher';
import ArrayMatcher from './ArrayMatcher';
import BooleanMatcher from './BooleanMatcher';
import DateMatcher from './DateMatcher';
import factory from './MatcherFactory';
import NumberMatcher from './NumberMatcher';
import OrMatcher from './OrMatcher';
import RegexMatcher from './RegexMatcher';
import StringMatcher from './StringMatcher';

const PRODUCTION_MANAGER = new ProductionManager({
  factory,
  products: [
    AndMatcher,
    AnyMatcher,
    ArrayMatcher,
    BooleanMatcher,
    DateMatcher,
    NumberMatcher,
    OrMatcher,
    RegexMatcher,
    StringMatcher,
  ],
});
export default PRODUCTION_MANAGER;
