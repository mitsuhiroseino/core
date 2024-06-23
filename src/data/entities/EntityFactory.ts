import Factory from '../../factory/Factory';
import { EntityConfig, IEntity } from './types';

const FACTORY = new Factory<IEntity, EntityConfig>({
  category: 'entity',
});
export default FACTORY;
