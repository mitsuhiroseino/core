import { LengthMatcherConfig, LengthMatchOptions as LengthMatcherMatchOptions } from '../../matchers/LengthMatcher';
import { MatcherFilterConfigBase, MatcherMatchOptionsBase } from '../MatcherFilterBase';

/**
 * matchメソッドのオプション
 */
export type LengthMatchOptions<V = any> = MatcherMatchOptionsBase<V> & LengthMatcherMatchOptions;

/**
 * コンフィグ
 */
export type LengthFilterConfig<V = any> = MatcherFilterConfigBase<V> & LengthMatcherConfig & LengthMatchOptions;
