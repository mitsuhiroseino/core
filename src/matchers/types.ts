import { FactoryableConfig, IFactoryable } from '../factory/Factory';

/**
 * matchメソッドのオプション
 */
export type MatchOptions = {
  /**
   * 否定
   */
  not?: boolean;
};

/**
 * コンフィグ
 */
export type MatcherConfig = FactoryableConfig;

/**
 * 2つの値を比較するクラスのインターフェイス
 */
export interface IMatcher<O extends MatchOptions = MatchOptions> extends IFactoryable {
  /**
   * Matcherのインスタンスであるか
   */
  readonly isMatcher: true;

  /**
   * 2つの値を比較する
   * @param value0 値0
   * @param value1 値1
   * @param options オプション
   * @return 比較結果
   */
  match(value0: any, value1: any, options?: O): boolean;
}
