import { ConfigBase } from '../../base/Base';
import { CompareOptions, SorterConfig } from '../types';

/**
 * compareメソッドのオプション
 */
export type CompareOptionsBase = CompareOptions;

/**
 * コンフィグ
 */
export type SorterConfigBase = ConfigBase & SorterConfig & CompareOptionsBase;
