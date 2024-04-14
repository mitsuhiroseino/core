import toMap from '../../../utils/array/toMap';
import { IValueRule, ValueRuleFactory } from '../../valuerules';
import EntryBase from '../EntryBase';
import { EntryItem } from '../types';
import { DataEntryBaseEvents } from './constants';
import { DataEntryBaseConfig, DataEntryBaseEventHandlers } from './types';

/**
 * エントリーの抽象クラス
 */
abstract class DataEntryBase<
  I extends EntryItem = EntryItem,
  H extends DataEntryBaseEventHandlers<I> = DataEntryBaseEventHandlers<I>,
  C extends DataEntryBaseConfig<I, H> = DataEntryBaseConfig<I, H>,
> extends EntryBase<I, H, C> {
  /**
   * 値規定
   */
  protected _valueRules!: IValueRule[];

  /**
   * 値規定のマップ
   */
  protected _valueRuleMap!: { [name: string]: IValueRule };

  constructor(config?: C) {
    super(config);
    const me = this,
      { item: orgItem, valueRules: valueRules } = me.config;
    me._valueRules = ValueRuleFactory.from(valueRules);
    me._valueRuleMap = toMap(me._valueRules, 'name');
    const item = { ...orgItem };
    item.$id = me.$id;
    me._item = item as I;
    for (const valueRules of me._valueRules) {
      this._set(valueRules.name, item[valueRules.name]);
    }
  }

  set<V = unknown>(name: string, value: V, silent?: boolean): boolean {
    const oldValue = this._item[name],
      changed = value !== oldValue;
    if (changed) {
      this._set(name, value);
      if (!silent) {
        this.fire(DataEntryBaseEvents.update, { entry: this, updates: { [name]: value } });
      }
    }
    return changed;
  }

  /**
   * itemに値を設定する
   * @param name
   * @param value
   */
  protected _set<V = unknown>(name: string, value: V): void {
    const valueRule = this._valueRuleMap[name];
    let val;
    if (valueRule) {
      val = valueRule.parse(value);
    } else {
      val = value;
    }
    this._setValue(name, val);
  }

  protected _setValue<V = unknown>(name: string, value: V): void {
    (this._item as EntryItem)[name] = value;
  }

  /**
   * 項目値の更新
   * @param updates 更新情報
   * @param silent trueの場合、updateイベントを発火しない
   */
  update(updates: Partial<I>, silent?: boolean): boolean {
    const { $id, ...rest } = updates;
    let changed = false;
    for (const name in rest) {
      const result = this.set(name, rest[name], true);
      if (result) {
        changed = true;
      }
    }
    if (changed && !silent) {
      this.fire(DataEntryBaseEvents.update, { entry: this, updates });
    }
    return changed;
  }
}
export default DataEntryBase;
