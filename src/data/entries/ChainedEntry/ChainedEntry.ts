import DataEntryBase, { DataEntryBaseEvents } from '../DataEntryBase';
import NoopEntry from '../NoopEntry';
import { IEntry } from '../types';
import { ChainedEntryConfig, ChainedEntryEventHandlers } from './types';

/**
 * 他のエントリーと連動するエントリー
 */
class ChainedEntry<
  I extends IEntry = IEntry,
  H extends ChainedEntryEventHandlers<I> = ChainedEntryEventHandlers<I>,
  C extends ChainedEntryConfig<I, H> = ChainedEntryConfig<I, H>,
> extends DataEntryBase<I, H, C> {
  /**
   * 種別
   */
  static TYPE = 'chained';

  protected _setItem(item: I): void {
    const me = this,
      oldItem = me._item;
    if (oldItem) {
      // イベントハンドラーを削除
      oldItem.removeHandlers(me);
    }
    if (item) {
      // イベントハンドラーを設定
      const handler = (({ entry }) => {
          me._setItem(entry);
        }) as any,
        options = { owner: me };
      item.addHandlers({ [DataEntryBaseEvents.update]: handler, [DataEntryBaseEvents.itemchange]: handler }, options);
    } else {
      me._setItem(new NoopEntry() as any);
    }
    me._item = item;
  }

  destructor(): void {
    this._item.removeHandlers(this);
    super.destructor();
  }
}
export default ChainedEntry;
