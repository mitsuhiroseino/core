import FactoryManager from '../../factory/FactoryManager';
import factory from './FieldFactory';

const FACTORY_MANAGER = new FactoryManager({
  factory,
  products: [],
});
export default FACTORY_MANAGER;
