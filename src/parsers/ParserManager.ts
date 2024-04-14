import ProductionManager from '../factory/ProductionManager';
import AnyParser from './AnyParser';
import BooleanParser from './BooleanParser';
import DateParser from './DateParser';
import NoopParser from './NoopParser';
import NumberParser from './NumberParser';
import ObjectParser from './ObjectParser';
import factory from './ParserFactory';
import StringParser from './StringParser';

const PRODUCTION_MANAGER = new ProductionManager({
  factory,
  products: [new NoopParser(), AnyParser, BooleanParser, DateParser, NumberParser, ObjectParser, StringParser],
});
export default PRODUCTION_MANAGER;
