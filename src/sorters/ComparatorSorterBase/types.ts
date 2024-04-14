import { CompareOptionsBase, SorterConfigBase } from '../SorterBase';

/**
 * matchメソッドのオプション
 */
export type ComparatorCompareOptionsBase = CompareOptionsBase;

/**
 * コンフィグ
 */
export type ComparatorSorterConfigBase = SorterConfigBase & ComparatorCompareOptionsBase;
