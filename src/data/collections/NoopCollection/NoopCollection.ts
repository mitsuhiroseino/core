import { EntityItem, IEntity } from '../../entities';
import CollectionBase from '../CollectionBase';
import { NoopCollectionConfig, NoopCollectionEventHandlers } from './types';

/**
 * 常にエンティティが0件のコレクション
 */
class NoopCollection<
  I extends EntityItem = EntityItem,
  S = any,
  H extends NoopCollectionEventHandlers<I> = NoopCollectionEventHandlers<I>,
  C extends NoopCollectionConfig<I, S, H> = NoopCollectionConfig<I, S, H>,
> extends CollectionBase<I, S, H, C> {
  /**
   * 種別
   */
  static TYPE = 'noop';

  protected _setSource(source: S): void {}

  protected _toSourceEntities(source: S): IEntity<I>[] {
    return [];
  }

  protected _toSourceItems(source: S): I[] {
    return [];
  }

  getSourceItems(): I[] {
    return [];
  }

  getSourceEntities(): IEntity<I>[] {
    return [];
  }

  getSourceSize(): number {
    return 0;
  }
}
export default NoopCollection;
