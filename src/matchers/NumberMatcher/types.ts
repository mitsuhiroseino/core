import { MatchOptions } from '../../utils/number/match';
import { MatchOptionsBase, MatcherConfigBase } from '../MatcherBase';

/**
 * matchメソッドのオプション
 */
export type NumberMatchOptions = MatchOptionsBase & MatchOptions;

/**
 * コンフィグ
 */
export type NumberMatcherConfig = MatcherConfigBase & NumberMatchOptions;
