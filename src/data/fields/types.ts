import { EventedEventHandlers, IEvented } from '../../base/Evented';
import { FactoryableConfig, IFactoryable } from '../../factory/Factory';
import { IValueRule, ValidateOptions, ValueRuleConfig } from '../valuerules';

/**
 * コンフィグ
 */
export type FieldConfig<V = any> = FactoryableConfig & {
  /**
   * フィールド名
   */
  name?: string;

  /**
   * 値規定
   */
  valueRule: string | IValueRule | ValueRuleConfig;

  /**
   * 値
   */
  value: V;
};

/**
 * validateメソッドのオプション
 */
export type ValidateValueOptions = ValidateOptions;

/**
 * フィールドのインターフェイス
 */
export interface IField<V = any, H extends EventedEventHandlers = EventedEventHandlers>
  extends IFactoryable,
    IEvented<H> {
  /**
   * Fieldのインスタンスであるか
   */
  isField: true;

  /**
   * フィールド名
   */
  readonly name: string;

  /**
   * 値を取得する
   * @returns 値
   */
  get(): V;

  /**
   * 値を設定する
   * @param value 値
   * @param silent trueの場合、updateイベントを発火しない
   * @returns 値が変更された場合にtrue
   */
  set(value: V, silent?: boolean): boolean;

  /**
   * 値の検証
   * @param value
   * @returns
   */
  validate(options?: ValidateValueOptions): string | null;

  /**
   * サーバー送信、ファイル保存時用の形式に変換する
   */
  serialize(): any;

  /**
   * 表示用の形式に変換する
   * @param value
   */
  format(): any | string;
}
