import { CompareOptionsBase, SorterConfigBase } from '../SorterBase';

/**
 * compareメソッドのオプション
 */
export type ValueCompareOptions = CompareOptionsBase;

/**
 * コンフィグ
 */
export type ValueSorterConfig = SorterConfigBase & ValueCompareOptions;
