import ProductionManager from '../../factory/ProductionManager';
import ChainedCollection from './ChainedCollection';
import factory from './CollectionFactory';
import DataCollection from './DataCollection';
import NoopCollection from './NoopCollection';

const PRODUCTION_MANAGER = new ProductionManager({
  factory,
  products: [new NoopCollection(), DataCollection, ChainedCollection],
});
export default PRODUCTION_MANAGER;
