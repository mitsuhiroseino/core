import { CompareOptions } from '@visue/utils/number/compare';
import { ComparatorConfigBase, CompareOptionsBase } from '../ComparatorBase';

/**
 * compareメソッドのオプション
 */
export type NumberCompareOptions = CompareOptionsBase & CompareOptions;

/**
 * コンフィグ
 */
export type NumberComparatorConfig = ComparatorConfigBase & NumberCompareOptions;
