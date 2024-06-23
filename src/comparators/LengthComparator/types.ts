import { CompareOptions } from '@visue/utils/number/compare';
import { ComparatorConfigBase, CompareOptionsBase } from '../ComparatorBase';

/**
 * compareメソッドのオプション
 */
export type LengthCompareOptions = CompareOptionsBase & CompareOptions;

/**
 * コンフィグ
 */
export type LengthComparatorConfig = ComparatorConfigBase & LengthCompareOptions;
