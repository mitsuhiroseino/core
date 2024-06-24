import { IdentifiableItem } from '@visue/utils/types';
import Evented from '../../../base/Evented';
import assignId from '../../../helpers/assignId';
import { EntityItem } from '../types';
import { EntityBaseEvents } from './constants';
import { EntityBaseConfig, EntityBaseEventHandlers } from './types';

/**
 * エンティティの抽象クラス
 */
abstract class EntityBase<
    I extends EntityItem = EntityItem,
    H extends EntityBaseEventHandlers = EntityBaseEventHandlers,
    C extends EntityBaseConfig<I, H> = EntityBaseConfig<I, H>,
  >
  extends Evented<H, C>
  implements IdentifiableItem
{
  readonly isEntity = true;

  /**
   * カテゴリー
   */
  static readonly CATEGORY = 'entity';

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
    this.fire(EntityBaseEvents.itemchange, { entity: this, item });
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
export default EntityBase;
