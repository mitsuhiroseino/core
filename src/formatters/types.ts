import { ToValidValueOptions } from '@visue/utils/lang/toValidValue';
import { FactoryableConfig, IFactoryable } from '../factory/Factory';

/**
 * formatメソッドのオプション
 */
export type FormatOptions = ToValidValueOptions<string>;

/**
 * コンフィグ
 */
export type FormatterConfig = FactoryableConfig & FormatOptions;

/**
 * フォーマッター
 * 任意の型の値を文字列形式で表示する為の形式に変換する
 */
export interface IFormatter<V = any, O extends FormatOptions = FormatOptions> extends IFactoryable {
  /**
   * Formatterのインスタンスであるか
   */
  readonly isFormatter: true;

  /**
   * 値をフォーマットする
   * @param value 値
   * @param options オプション
   */
  format(value: V, options?: O): string;
}
