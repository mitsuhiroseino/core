import Factory from '../factory/Factory';
import { IParser, ParserConfig } from './types';

const FACTORY = new Factory<IParser, ParserConfig>({
  category: 'parser',
});
export default FACTORY;
