import Evented from '../../../base/Evented';
import initFactoryable from '../../../helpers/initFactoryable';
import { IValueRule, ValueRuleConfig, ValueRuleFactory } from '../../valuerules';
import { IField, ValidateValueOptions } from '../types';
import { FieldBaseEvents } from './constants';
import { FieldBaseConfig, FieldBaseEventHandlers } from './types';

/**
 * フィールドの基底クラス
 */
abstract class FieldBase<
    V = any,
    H extends FieldBaseEventHandlers<V> = FieldBaseEventHandlers<V>,
    C extends FieldBaseConfig<V, H> = FieldBaseConfig<V, H>,
  >
  extends Evented<H, C>
  implements IField<V, H>
{
  readonly isField = true;

  /**
   * カテゴリー
   */
  static readonly CATEGORY = 'field';

  /**
   * ID
   */
  readonly $id!: string;

  /**
   * 種別
   */
  readonly type!: string;

  /**
   * フィールド名
   */
  get name(): string {
    return this._valueRule.name;
  }

  /**
   * 値規定
   */
  protected _valueRule!: IValueRule;

  /**
   * 値
   */
  protected _value!: V;

  constructor(config?: C) {
    super(config);
    const me = this,
      cfg = me.config,
      { valueRule, value } = cfg;
    initFactoryable(me, cfg);
    me._valueRule = ValueRuleFactory.get(valueRule || me._getValueRuleConfig());
    me._set(value);
  }

  protected abstract _getValueRuleConfig(): string | ValueRuleConfig;

  /**
   * 値を取得する
   * @returns 値
   */
  get(): V {
    return this._value;
  }

  /**
   * 値を設定する
   * @param value 値
   * @param silent trueの場合、updateイベントを発火しない
   * @returns 値が変更された場合にtrue
   */
  set(value: V, silent?: boolean): boolean {
    const oldValue = this._value,
      changed = this._isChanged(value, oldValue);
    if (changed) {
      this._set(value);
      if (!silent) {
        this.fire(FieldBaseEvents.change, { value });
      }
    }
    return changed;
  }

  protected _isChanged(value: V, oldValue: V): boolean {
    return value === oldValue;
  }

  /**
   * 値を設定する
   * @param name
   * @param value
   */
  protected _set(value: V): void {
    this._value = this._valueRule.parse(value);
  }

  validate(options?: ValidateValueOptions): string | null {
    return this._validate(this._value, options);
  }

  protected _validate(value: any, options?: ValidateValueOptions): string | null {
    return this._valueRule.validate(value, options);
  }

  serialize() {
    return this._serialize(this._value);
  }

  protected _serialize(value: V) {
    return this._valueRule.serialize(value);
  }

  format(): any {
    return this._format(this._value);
  }

  protected _format(value: V): any {
    return this._valueRule.format(value);
  }

  destructor(): void {
    this._valueRule.destructor();
    this._deleteProperties(['_valueRule', '_value']);
    super.destructor();
  }
}
export default FieldBase;
