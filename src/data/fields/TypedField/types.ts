import { IValueType, ValueTypeConfig } from '../../valuetypes';
import { FieldBaseConfig, FieldBaseEventHandlers } from '../FieldBase';

/**
 * イベントハンドラー
 */
export type TypedFieldEventHandlers<V = any> = FieldBaseEventHandlers<V>;

/**
 * コンフィグ
 */
export type TypedFieldConfig<
  V = any,
  H extends TypedFieldEventHandlers<V> = TypedFieldEventHandlers<V>,
> = FieldBaseConfig<V, H> & {
  /**
   * フィールド名
   */
  name?: string;

  /**
   * データタイプ
   * valueRuleが設定されている場合は無効
   */
  valueType?: string | IValueType | ValueTypeConfig;
};
