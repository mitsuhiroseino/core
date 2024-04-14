import Factory from '../factory/Factory';
import { IMatcher, MatcherConfig } from './types';

const FACTORY = new Factory<IMatcher, MatcherConfig>({
  category: 'matcher',
});
export default FACTORY;
