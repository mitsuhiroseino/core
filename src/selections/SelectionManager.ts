import ProductionManager from '../factory/ProductionManager';
import DataSelection from './DataSelection';
import factory from './SelectionFactory';

const PRODUCTION_MANAGER = new ProductionManager({
  factory,
  products: [DataSelection],
});
export default PRODUCTION_MANAGER;
