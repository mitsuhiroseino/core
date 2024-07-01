import FactoryManager from '../../factory/FactoryManager';
import ChainedCollection from './ChainedCollection';
import factory from './CollectionFactory';
import DataCollection from './DataCollection';
import NoopCollection from './NoopCollection';

const FACTORY_MANAGER = new FactoryManager({
  factory,
  products: [new NoopCollection(), DataCollection, ChainedCollection],
});
export default FACTORY_MANAGER;
