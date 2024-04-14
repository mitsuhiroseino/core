import { EntryItem, IEntry } from '../../entries';
import CollectionBase from '../CollectionBase';
import { NoopCollectionConfig, NoopCollectionEventHandlers } from './types';

/**
 * 常にエントリーが0件のコレクション
 */
class NoopCollection<
  I extends EntryItem = EntryItem,
  S = any,
  H extends NoopCollectionEventHandlers<I> = NoopCollectionEventHandlers<I>,
  C extends NoopCollectionConfig<I, S, H> = NoopCollectionConfig<I, S, H>,
> extends CollectionBase<I, S, H, C> {
  /**
   * 種別
   */
  static TYPE = 'noop';

  protected _setSource(source: S): void {}

  protected _toSourceEntries(source: S): IEntry<I>[] {
    return [];
  }

  protected _toSourceItems(source: S): I[] {
    return [];
  }

  getSourceItems(): I[] {
    return [];
  }

  getSourceEntries(): IEntry<I>[] {
    return [];
  }

  getSourceSize(): number {
    return 0;
  }
}
export default NoopCollection;
