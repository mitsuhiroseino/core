import ProductionManager from '../factory/ProductionManager';
import AnySorter from './AnySorter';
import ArraySorter from './ArraySorter';
import BooleanSorter from './BooleanSorter';
import DateSorter from './DateSorter';
import LengthSorter from './LengthSorter';
import ListSorter from './ListSorter';
import NumberSorter from './NumberSorter';
import factory from './SorterFactory';
import StringSorter from './StringSorter';
import ValueSorter from './ValueSorter';

const PRODUCTION_MANAGER = new ProductionManager({
  factory,
  products: [
    AnySorter,
    ArraySorter,
    BooleanSorter,
    DateSorter,
    LengthSorter,
    NumberSorter,
    StringSorter,
    ListSorter,
    ValueSorter,
  ],
});
export default PRODUCTION_MANAGER;
