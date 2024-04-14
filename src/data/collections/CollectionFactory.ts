import Factory from '../../factory/Factory';
import { CollectionConfig, ICollection } from './types';

const FACTORY = new Factory<ICollection, CollectionConfig>({
  category: 'collection',
});
export default FACTORY;
