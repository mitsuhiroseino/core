import {
  NumberCompareOptions as NumberComparaterCompareOptions,
  NumberComparatorConfig,
} from '../../comparators/NumberComparator';
import { ComparatorCompareOptionsBase, ComparatorSorterConfigBase } from '../ComparatorSorterBase';

/**
 * compareメソッドのオプション
 */
export type NumberCompareOptions = ComparatorCompareOptionsBase & NumberComparaterCompareOptions;

/**
 * コンフィグ
 */
export type NumberSorterConfig = ComparatorSorterConfigBase & NumberCompareOptions & NumberComparatorConfig;
