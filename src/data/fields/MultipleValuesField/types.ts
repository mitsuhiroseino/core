import { TypedFieldConfig, TypedFieldEventHandlers } from '../TypedField';

/**
 * イベントハンドラー
 */
export type MultipleValuesFieldEventHandlers<V = any> = TypedFieldEventHandlers<V>;

/**
 * コンフィグ
 */
export type MultipleValuesFieldConfig<
  V = any,
  H extends MultipleValuesFieldEventHandlers<V> = MultipleValuesFieldEventHandlers<V>,
> = TypedFieldConfig<V, H>;
