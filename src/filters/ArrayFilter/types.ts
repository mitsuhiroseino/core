import { ArrayMatcherConfig, ArrayMatchOptions as ArrayMatcherMatchOptions } from '../../matchers/ArrayMatcher';
import { MatcherFilterConfigBase, MatcherMatchOptionsBase } from '../MatcherFilterBase';

/**
 * matchメソッドのオプション
 */
export type ArrayMatchOptions<V = any[]> = MatcherMatchOptionsBase<V> & ArrayMatcherMatchOptions;

/**
 * コンフィグ
 */
export type ArrayFilterConfig<V = any[]> = MatcherFilterConfigBase<V> & ArrayMatcherConfig & ArrayMatchOptions;
