import ProductionManager from '../factory/ProductionManager';
import ArrayReader from './ArrayReader';
import JsonReader from './JsonReader';
import ObjectReader from './ObjectReader';
import factory from './ReaderFactory';

const PRODUCTION_MANAGER = new ProductionManager({
  factory,
  products: [ArrayReader, JsonReader, ObjectReader],
});
export default PRODUCTION_MANAGER;
