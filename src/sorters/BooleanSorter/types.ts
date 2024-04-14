import {
  BooleanCompareOptions as BooleanComparaterCompareOptions,
  BooleanComparatorConfig,
} from '../../comparators/BooleanComparator';
import { ComparatorCompareOptionsBase, ComparatorSorterConfigBase } from '../ComparatorSorterBase';

/**
 * compareメソッドのオプション
 */
export type BooleanCompareOptions = ComparatorCompareOptionsBase & BooleanComparaterCompareOptions;

/**
 * コンフィグ
 */
export type BooleanSorterConfig = ComparatorSorterConfigBase & BooleanCompareOptions & BooleanComparatorConfig;
