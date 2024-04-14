import { AnyMatcherConfig, AnyMatchOptions as AnyMatcherMatchOptions } from '../../matchers/AnyMatcher';
import { MatcherFilterConfigBase, MatcherMatchOptionsBase } from '../MatcherFilterBase';

/**
 * matchメソッドのオプション
 */
export type AnyMatchOptions<V = any> = MatcherMatchOptionsBase<V> & AnyMatcherMatchOptions;

/**
 * コンフィグ
 */
export type AnyFilterConfig<V = any> = MatcherFilterConfigBase<V> & AnyMatcherConfig & AnyMatchOptions;
