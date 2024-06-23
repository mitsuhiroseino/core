import ProductionManager from '../../factory/ProductionManager';
import DataEntity from './DataEntity';
import factory from './EntityFactory';

const MANAGER = new ProductionManager({
  factory,
  products: [DataEntity],
});
export default MANAGER;
