import { NumberMatcherConfig, NumberMatchOptions as NumberMatcherMatchOptions } from '../../matchers/NumberMatcher';
import { MatcherFilterConfigBase, MatcherMatchOptionsBase } from '../MatcherFilterBase';

/**
 * matchメソッドのオプション
 */
export type NumberMatchOptions<V = number> = MatcherMatchOptionsBase<V> & NumberMatcherMatchOptions;

/**
 * コンフィグ
 */
export type NumberFilterConfig<V = number> = MatcherFilterConfigBase<V> & NumberMatcherConfig & NumberMatchOptions;
