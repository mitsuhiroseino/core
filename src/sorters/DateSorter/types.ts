import {
  DateCompareOptions as DateComparaterCompareOptions,
  DateComparatorConfig,
} from '../../comparators/DateComparator';
import { ComparatorCompareOptionsBase, ComparatorSorterConfigBase } from '../ComparatorSorterBase';

/**
 * compareメソッドのオプション
 */
export type DateCompareOptions = ComparatorCompareOptionsBase & DateComparaterCompareOptions;

/**
 * コンフィグ
 */
export type DateSorterConfig = ComparatorSorterConfigBase & DateCompareOptions & DateComparatorConfig;
