import Factory from '../factory/Factory';
import { IReader, ReaderConfig } from './types';

const FACTORY = new Factory<IReader, ReaderConfig>({
  category: 'reader',
});
export default FACTORY;
