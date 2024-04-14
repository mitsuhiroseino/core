import Evented from '../../../base/Evented';
import assignId from '../../../helpers/assignId';
import { IdentifiableItem } from '../../../types';
import { EntryItem } from '../types';
import { EntryBaseEvents } from './constants';
import { EntryBaseConfig, EntryBaseEventHandlers } from './types';

/**
 * エントリーの抽象クラス
 */
abstract class EntryBase<
    I extends EntryItem = EntryItem,
    H extends EntryBaseEventHandlers = EntryBaseEventHandlers,
    C extends EntryBaseConfig<I, H> = EntryBaseConfig<I, H>,
  >
  extends Evented<H, C>
  implements IdentifiableItem
{
  readonly isEntry = true;

  /**
   * カテゴリー
   */
  static readonly CATEGORY = 'entry';

  /**
   * ID
   */
  readonly id!: string;

  /**
   * 種別
   */
  readonly type!: string;

  /**
   * ID
   */
  readonly $id: string;

  /**
   * 要素
   */
  protected _item!: I;

  /**
   * 要素
   */
  get item(): I {
    return this._item;
  }

  constructor(config?: C) {
    super(config);
    this.$id = assignId(this.config.item, '$id');
  }

  protected _setItem(item: I): void {
    this._item = item;
    this.fire(EntryBaseEvents.itemchange, { entry: this, item });
  }

  /**
   * 項目値を取得する
   * @param name 項目名
   * @returns
   */
  get<V = unknown>(name: string): V {
    return this._item[name];
  }
}
export default EntryBase;
