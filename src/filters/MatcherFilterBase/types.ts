import { FilterConfigBase, MatchOptionsBase } from '../FilterBase';

/**
 * matchメソッドのオプション
 */
export type MatcherMatchOptionsBase<V = any> = MatchOptionsBase & {
  /**
   * 条件となる値
   */
  value: V;
};

/**
 * コンフィグ
 */
export type MatcherFilterConfigBase<V = any> = FilterConfigBase & MatcherMatchOptionsBase<V>;
