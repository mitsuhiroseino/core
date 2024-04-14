import {
  ArrayCompareOptions as ArrayComparaterCompareOptions,
  ArrayComparatorConfig,
} from '../../comparators/ArrayComparator';
import { ComparatorCompareOptionsBase, ComparatorSorterConfigBase } from '../ComparatorSorterBase';

/**
 * compareメソッドのオプション
 */
export type ArrayCompareOptions = ComparatorCompareOptionsBase & ArrayComparaterCompareOptions;

/**
 * コンフィグ
 */
export type ArraySorterConfig = ComparatorSorterConfigBase & ArrayCompareOptions & ArrayComparatorConfig;
