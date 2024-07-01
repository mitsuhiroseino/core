import FactoryManager from '../factory/FactoryManager';
import ArrayWriter from './ArrayWriter';
import JsonWriter from './JsonWriter';
import ObjectWriter from './ObjectWriter';
import factory from './WriterFactory';

const FACTORY_MANAGER = new FactoryManager({
  factory,
  products: [ArrayWriter, JsonWriter, ObjectWriter],
});
export default FACTORY_MANAGER;
