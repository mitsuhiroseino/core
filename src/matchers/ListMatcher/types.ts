import { MatchOptionsBase, MatcherConfigBase } from '../MatcherBase';

/**
 * matchメソッドのオプション
 */
export type ListMatchOptions = MatchOptionsBase;

/**
 * コンフィグ
 */
export type ListMatcherConfig = MatcherConfigBase & ListMatchOptions;
