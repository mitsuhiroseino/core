import FactoryManager from '../factory/FactoryManager';
import DataSelection from './DataSelection';
import factory from './SelectionFactory';

const FACTORY_MANAGER = new FactoryManager({
  factory,
  products: [DataSelection],
});
export default FACTORY_MANAGER;
