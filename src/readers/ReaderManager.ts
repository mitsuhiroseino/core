import FactoryManager from '../factory/FactoryManager';
import ArrayReader from './ArrayReader';
import JsonReader from './JsonReader';
import ObjectReader from './ObjectReader';
import factory from './ReaderFactory';

const FACTORY_MANAGER = new FactoryManager({
  factory,
  products: [ArrayReader, JsonReader, ObjectReader],
});
export default FACTORY_MANAGER;
