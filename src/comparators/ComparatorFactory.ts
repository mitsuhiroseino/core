import Factory from '../factory/Factory';
import { ComparatorConfig, IComparator } from './types';

const FACTORY = new Factory<IComparator, ComparatorConfig>({
  category: 'comparator',
});
export default FACTORY;
