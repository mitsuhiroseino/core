import clone from 'lodash/clone';

import { EntryItem, IEntry } from '../../entries';
import CollectionBase, { CollectionBaseEvents } from '../CollectionBase';
import NoopCollection from '../NoopCollection';
import { ICollection } from '../types';
import { ChainedCollectionConfig, ChainedCollectionEventHandlers } from './types';

/**
 * 他のコレクションと連動するコレクション
 */
class ChainedCollection<
  I extends EntryItem = EntryItem,
  S extends ICollection<I> = ICollection<I>,
  H extends ChainedCollectionEventHandlers<I> = ChainedCollectionEventHandlers<I>,
  C extends ChainedCollectionConfig<I, S, H> = ChainedCollectionConfig<I, S, H>,
> extends CollectionBase<I, S, H, C> {
  /**
   * 種別
   */
  static TYPE = 'chained';

  protected _setSource(source: S): void {
    const me = this,
      oldSource = me._source;
    if (oldSource) {
      // イベントハンドラーを削除
      oldSource.removeHandlers(me);
    }
    if (source) {
      // イベントハンドラーを設定
      source.on(
        CollectionBaseEvents.datachange,
        ({ params }) => {
          me._setSourceEntries(params.data);
        },
        { owner: me },
      );
    } else {
      source = new NoopCollection<I>() as any;
    }
    me._source = source;
  }

  protected _toSourceEntries(source: S = this._source): IEntry<I>[] {
    return clone(source.getEntries());
  }

  destructor(): void {
    this._source.removeHandlers(this);
    super.destructor();
  }
}
export default ChainedCollection;
