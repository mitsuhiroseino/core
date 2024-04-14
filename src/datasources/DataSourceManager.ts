import ProductionManager from '../factory/ProductionManager';
import AnyDataSource from './AnyDataSource';
import factory from './DataSourceFactory';
import MemoryDataSource from './MemoryDataSource';

const PRODUCTION_MANAGER = new ProductionManager({
  factory,
  products: [AnyDataSource, MemoryDataSource],
});
export default PRODUCTION_MANAGER;
