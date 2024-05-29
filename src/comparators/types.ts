import { FactoryableConfig, IFactoryable } from '../factory/Factory';

/**
 * compareメソッドのオプション
 */
export type CompareOptions = {};

/**
 * コンフィグ
 */
export type ComparatorConfig = FactoryableConfig;

/**
 * 2つの値を比較するクラスのインターフェイス
 */
export interface IComparator<O extends CompareOptions = CompareOptions> extends IFactoryable {
  /**
   * Comparatorのインスタンスであるか
   */
  readonly isComparator: true;

  /**
   * 2つの値を比較する
   * @param value1 値0
   * @param value2 値1
   * @param options オプション
   * @return 比較結果
   */
  compare(value1: any, value2: any, options?: O): number;
}
