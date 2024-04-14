import { BooleanMatcherConfig, BooleanMatchOptions as BooleanMatcherMatchOptions } from '../../matchers/BooleanMatcher';
import { MatcherFilterConfigBase, MatcherMatchOptionsBase } from '../MatcherFilterBase';

/**
 * matchメソッドのオプション
 */
export type BooleanMatchOptions<V = boolean> = MatcherMatchOptionsBase<V> & BooleanMatcherMatchOptions;

/**
 * コンフィグ
 */
export type BooleanFilterConfig<V = boolean> = MatcherFilterConfigBase<V> & BooleanMatcherConfig & BooleanMatchOptions;
