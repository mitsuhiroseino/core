import { ComparatorConfigBase, CompareOptionsBase } from '../ComparatorBase';

/**
 * compareメソッドのオプション
 */
export type OrderCompareOptions = CompareOptionsBase & {
  /**
   * 要素の順番
   */
  order: any[];
};

/**
 * コンフィグ
 */
export type OrderComparatorConfig = ComparatorConfigBase & OrderCompareOptions;
