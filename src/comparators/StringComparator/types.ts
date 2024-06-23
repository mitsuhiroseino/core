import { CompareOptions } from '@visue/utils/string/compare';
import { ComparatorConfigBase, CompareOptionsBase } from '../ComparatorBase';

/**
 * compareメソッドのオプション
 */
export type StringCompareOptions = CompareOptionsBase & CompareOptions;

/**
 * コンフィグ
 */
export type StringComparatorConfig = ComparatorConfigBase & StringCompareOptions;
