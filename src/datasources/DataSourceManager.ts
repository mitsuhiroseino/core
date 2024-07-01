import FactoryManager from '../factory/FactoryManager';
import AnyDataSource from './AnyDataSource';
import factory from './DataSourceFactory';
import MemoryDataSource from './MemoryDataSource';

const FACTORY_MANAGER = new FactoryManager({
  factory,
  products: [AnyDataSource, MemoryDataSource],
});
export default FACTORY_MANAGER;
