import {
  LengthCompareOptions as LengthComparaterCompareOptions,
  LengthComparatorConfig,
} from '../../comparators/LengthComparator';
import { ComparatorCompareOptionsBase, ComparatorSorterConfigBase } from '../ComparatorSorterBase';

/**
 * compareメソッドのオプション
 */
export type LengthCompareOptions = ComparatorCompareOptionsBase & LengthComparaterCompareOptions;

/**
 * コンフィグ
 */
export type LengthSorterConfig = ComparatorSorterConfigBase & LengthCompareOptions & LengthComparatorConfig;
