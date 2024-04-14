import ProductionManager from '../../factory/ProductionManager';
import DataEntry from './DataEntry';
import factory from './EntryFactory';

const PRODUCTION_MANAGER = new ProductionManager({
  factory,
  products: [DataEntry],
});
export default PRODUCTION_MANAGER;
