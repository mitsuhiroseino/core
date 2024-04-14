import { StringMatcherConfig, StringMatchOptions as StringMatcherMatchOptions } from '../../matchers/StringMatcher';
import { MatcherFilterConfigBase, MatcherMatchOptionsBase } from '../MatcherFilterBase';

/**
 * matchメソッドのオプション
 */
export type StringMatchOptions<V = string> = MatcherMatchOptionsBase<V> & StringMatcherMatchOptions;

/**
 * コンフィグ
 */
export type StringFilterConfig<V = string> = MatcherFilterConfigBase<V> & StringMatcherConfig & StringMatchOptions;
