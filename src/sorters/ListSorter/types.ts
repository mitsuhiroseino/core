import { CompareOptions } from '@visue/utils/number/compare';
import { CompareOptionsBase, SorterConfigBase } from '../SorterBase';

/**
 * compareメソッドのオプション
 */
export type ListCompareOptions = CompareOptionsBase & CompareOptions;

/**
 * コンフィグ
 */
export type ListSorterConfig = SorterConfigBase &
  ListCompareOptions & {
    /**
     * 順番
     */
    order: any[];
  };
