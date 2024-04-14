import { CompareOptions } from '../../utils/number/compare';
import { ComparatorConfigBase, CompareOptionsBase } from '../ComparatorBase';

/**
 * compareメソッドのオプション
 */
export type NumberCompareOptions = CompareOptionsBase & CompareOptions;

/**
 * コンフィグ
 */
export type NumberComparatorConfig = ComparatorConfigBase & NumberCompareOptions;
