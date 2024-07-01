import FactoryManager from '../../factory/FactoryManager';
import DataEntity from './DataEntity';
import factory from './EntityFactory';

const MANAGER = new FactoryManager({
  factory,
  products: [DataEntity],
});
export default MANAGER;
