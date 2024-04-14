import { FactoryableConfig, IFactoryable } from '../factory/Factory';
import { ToValidValueOptions } from '../utils/lang/toValidValue';

/**
 * parseメソッドのオプション
 */
export type ParseOptions<V = any> = ToValidValueOptions<V>;

/**
 * コンフィグ
 */
export type ParserConfig = FactoryableConfig & ParseOptions;

/**
 * パーサー
 */
export interface IParser<R = any, O extends ParseOptions = ParseOptions> extends IFactoryable {
  /**
   * Parserのインスタンスであるか
   */
  readonly isParser: true;

  /**
   * 値をパースする
   * @param value 値
   * @param options オプション
   */
  parse(value: any, options?: O): R;
}
