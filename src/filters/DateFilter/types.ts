import { DateMatcherConfig, DateMatchOptions as DateMatcherMatchOptions } from '../../matchers/DateMatcher';
import { MatcherFilterConfigBase, MatcherMatchOptionsBase } from '../MatcherFilterBase';

/**
 * matchメソッドのオプション
 */
export type DateMatchOptions<V = Date> = MatcherMatchOptionsBase<V> & DateMatcherMatchOptions;

/**
 * コンフィグ
 */
export type DateFilterConfig<V = Date> = MatcherFilterConfigBase<V> & DateMatcherConfig & DateMatchOptions;
