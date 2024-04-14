import { MatchOptions } from '../../utils/number/match';
import { MatchOptionsBase, MatcherConfigBase } from '../MatcherBase';

/**
 * matchメソッドのオプション
 */
export type LengthMatchOptions = MatchOptionsBase & MatchOptions;

/**
 * コンフィグ
 */
export type LengthMatcherConfig = MatcherConfigBase & LengthMatchOptions;
