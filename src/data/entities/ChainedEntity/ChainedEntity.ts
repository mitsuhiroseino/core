import DataEntityBase, { DataEntityBaseEvents } from '../DataEntityBase';
import NoopEntity from '../NoopEntity';
import { IEntity } from '../types';
import { ChainedEntityConfig, ChainedEntityEventHandlers } from './types';

/**
 * 他のエンティティと連動するエンティティ
 */
class ChainedEntity<
  I extends IEntity = IEntity,
  H extends ChainedEntityEventHandlers<I> = ChainedEntityEventHandlers<I>,
  C extends ChainedEntityConfig<I, H> = ChainedEntityConfig<I, H>,
> extends DataEntityBase<I, H, C> {
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
      const handler = (({ entity }) => {
          me._setItem(entity);
        }) as any,
        options = { owner: me };
      item.addHandlers({ [DataEntityBaseEvents.update]: handler, [DataEntityBaseEvents.itemchange]: handler }, options);
    } else {
      me._setItem(new NoopEntity() as any);
    }
    me._item = item;
  }

  destructor(): void {
    this._item.removeHandlers(this);
    super.destructor();
  }
}
export default ChainedEntity;
