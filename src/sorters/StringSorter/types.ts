import {
  StringCompareOptions as StringComparaterCompareOptions,
  StringComparatorConfig,
} from '../../comparators/StringComparator';
import { ComparatorCompareOptionsBase, ComparatorSorterConfigBase } from '../ComparatorSorterBase';

/**
 * compareメソッドのオプション
 */
export type StringCompareOptions = ComparatorCompareOptionsBase & StringComparaterCompareOptions;

/**
 * コンフィグ
 */
export type StringSorterConfig = ComparatorSorterConfigBase & StringCompareOptions & StringComparatorConfig;
