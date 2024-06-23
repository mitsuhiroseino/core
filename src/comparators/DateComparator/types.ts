import { CompareOptions } from '@visue/utils/date/compare';
import { ComparatorConfigBase, CompareOptionsBase } from '../ComparatorBase';

/**
 * compareメソッドのオプション
 */
export type DateCompareOptions = CompareOptionsBase & CompareOptions;

/**
 * コンフィグ
 */
export type DateComparatorConfig = ComparatorConfigBase & DateCompareOptions;
