import { ConfigBase } from '../../base/Base';
import { MatchOptions, MatcherConfig } from '../types';

/**
 * matchメソッドのオプション
 */
export type MatchOptionsBase = MatchOptions;

/**
 * コンフィグ
 */
export type MatcherConfigBase = ConfigBase & MatcherConfig & MatchOptionsBase;
