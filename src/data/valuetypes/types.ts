import { ToValidValueOptions } from '@visue/utils/lang/toValidValue';
import { FactoryableConfig, IFactoryable } from '../../factory/Factory';
import { FormatterConfig, IFormatter } from '../../formatters';
import { IParser, ParserConfig } from '../../parsers';

/**
 * コンフィグ
 */
export type ValueTypeConfig<
  P extends ParserConfig = ParserConfig,
  F extends FormatterConfig = FormatterConfig,
> = FactoryableConfig &
  ToValidValueOptions<string> & {
    /**
     * パーサー
     */
    parser?: string | IParser | P;

    /**
     * フォーマッター
     */
    formatter?: string | IFormatter | F;
  };

/**
 * 値型のインターフェイス
 */
export interface IValueType<V = any> extends IFactoryable {
  /**
   * ValueTypeのインスタンスであるか
   */
  isValueType: true;

  /**
   * 任意の値から目的の型の値に変換する
   */
  parse(source: any): V;

  /**
   * 目的の型の値をテキストファイルへの保存や、リクエストの送信時に利用する型に変換する
   */
  serialize(value: V): any;

  /**
   * 目的の型の値を表示用の形式に変換する
   * @param value
   */
  format(value: V): string;
}
