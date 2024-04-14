import ProductionManager from '../factory/ProductionManager';
import ArrayWriter from './ArrayWriter';
import JsonWriter from './JsonWriter';
import ObjectWriter from './ObjectWriter';
import factory from './WriterFactory';

const PRODUCTION_MANAGER = new ProductionManager({
  factory,
  products: [ArrayWriter, JsonWriter, ObjectWriter],
});
export default PRODUCTION_MANAGER;
