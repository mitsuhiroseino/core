import { RegexMatcherConfig, RegexMatchOptions as RegexMatcherMatchOptions } from '../../matchers/RegexMatcher';
import { MatcherFilterConfigBase, MatcherMatchOptionsBase } from '../MatcherFilterBase';

/**
 * matchメソッドのオプション
 */
export type RegexMatchOptions = MatcherMatchOptionsBase<RegExp | string> & RegexMatcherMatchOptions;

/**
 * コンフィグ
 */
export type RegexFilterConfig = RegexMatcherConfig & MatcherFilterConfigBase<RegExp | string> & RegexMatchOptions;
