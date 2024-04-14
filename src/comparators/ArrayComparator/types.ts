import { CompareOptions } from '../../utils/array/compare';
import { ComparatorConfigBase, CompareOptionsBase } from '../ComparatorBase';

/**
 * compareメソッドのオプション
 */
export type ArrayCompareOptions = CompareOptionsBase & CompareOptions;

/**
 * コンフィグ
 */
export type ArrayComparatorConfig = ComparatorConfigBase & ArrayCompareOptions;
