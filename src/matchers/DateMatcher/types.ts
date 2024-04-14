import { MatchOptions } from '../../utils/date/match';
import { MatchOptionsBase, MatcherConfigBase } from '../MatcherBase';

/**
 * matchメソッドのオプション
 */
export type DateMatchOptions = MatchOptionsBase & MatchOptions;

/**
 * コンフィグ
 */
export type DateMatcherConfig = MatcherConfigBase & DateMatchOptions;
