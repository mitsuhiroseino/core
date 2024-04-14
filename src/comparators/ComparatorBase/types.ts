import { ConfigBase } from '../../base/Base';
import { ComparatorConfig, CompareOptions } from '../types';

/**
 * compareメソッドのオプション
 */
export type CompareOptionsBase = CompareOptions;

/**
 * コンフィグ
 */
export type ComparatorConfigBase = ConfigBase & ComparatorConfig & CompareOptionsBase;
