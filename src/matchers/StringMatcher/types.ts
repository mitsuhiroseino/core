import { MatchOptions } from '@visue/utils/string/match';
import { MatchOptionsBase, MatcherConfigBase } from '../MatcherBase';

/**
 * matchメソッドのオプション
 */
export type StringMatchOptions = MatchOptionsBase & MatchOptions;

/**
 * コンフィグ
 */
export type StringMatcherConfig = MatcherConfigBase & StringMatchOptions;
