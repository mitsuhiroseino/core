import { CompareOptions } from '@visue/utils/boolean/compare';
import { ComparatorConfigBase, CompareOptionsBase } from '../ComparatorBase';

/**
 * compareメソッドのオプション
 */
export type BooleanCompareOptions = CompareOptionsBase & CompareOptions;

/**
 * コンフィグ
 */
export type BooleanComparatorConfig = ComparatorConfigBase & BooleanCompareOptions;
