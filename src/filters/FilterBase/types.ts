import { ConfigBase } from '../../base/Base';
import { FilterConfig, MatchOptions } from '../types';

/**
 * matchメソッドのオプション
 */
export type MatchOptionsBase = MatchOptions;

/**
 * コンフィグ
 */
export type FilterConfigBase = ConfigBase & FilterConfig & MatchOptionsBase;
