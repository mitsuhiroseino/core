import EntityBase from '../EntityBase';
import { EntityItem } from '../types';
import { NoopEntityConfig, NoopEntityEventHandlers } from './types';

/**
 * 何もしないエンティティ
 */
class NoopEntity<
  I extends EntityItem = EntityItem,
  H extends NoopEntityEventHandlers = NoopEntityEventHandlers,
  C extends NoopEntityConfig<I, H> = NoopEntityConfig<I, H>,
> extends EntityBase<I, H, C> {
  /**
   * 種別
   */
  static TYPE = 'noop';
}
export default NoopEntity;
