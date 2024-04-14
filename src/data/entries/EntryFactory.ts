import Factory from '../../factory/Factory';
import { EntryConfig, IEntry } from './types';

const FACTORY = new Factory<IEntry, EntryConfig>({
  category: 'entry',
});
export default FACTORY;
