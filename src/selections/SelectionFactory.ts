import Factory from '../factory/Factory';
import { ISelection, SelectionConfig } from './types';

const FACTORY = new Factory<ISelection, SelectionConfig>({
  category: 'selection',
});
export default FACTORY;
