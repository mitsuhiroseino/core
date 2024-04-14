import Factory from '../factory/Factory';
import { FormatterConfig, IFormatter } from './types';

const FACTORY = new Factory<IFormatter, FormatterConfig>({
  category: 'formatter',
});
export default FACTORY;
