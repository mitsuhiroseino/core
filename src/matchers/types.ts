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
   * @param value1 値1
   * @param value2 値2
   * @param options オプション
   * @return 比較結果
   */
  match(value1: any, value2: any, options?: O): boolean;
}
