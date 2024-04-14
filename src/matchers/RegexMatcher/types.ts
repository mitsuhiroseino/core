import { MatchOptionsBase, MatcherConfigBase } from '../MatcherBase';

/**
 * matchメソッドのオプション
 */
export type RegexMatchOptions = MatchOptionsBase & {
  /**
   * 正規表現を文字列で指定した際のフラグ
   */
  flags?: string;
};

/**
 * コンフィグ
 */
export type RegexMatcherConfig = MatcherConfigBase & RegexMatchOptions;
