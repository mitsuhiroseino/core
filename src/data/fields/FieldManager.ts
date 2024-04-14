import ProductionManager from '../../factory/ProductionManager';
import factory from './FieldFactory';

const PRODUCTION_MANAGER = new ProductionManager({
  factory,
  products: [],
});
export default PRODUCTION_MANAGER;
