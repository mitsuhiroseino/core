import { AnyCompareOptions as AnyComparaterCompareOptions, AnyComparatorConfig } from '../../comparators/AnyComparator';
import { ComparatorCompareOptionsBase, ComparatorSorterConfigBase } from '../ComparatorSorterBase';

/**
 * compareメソッドのオプション
 */
export type AnyCompareOptions = ComparatorCompareOptionsBase & AnyComparaterCompareOptions;

/**
 * コンフィグ
 */
export type AnySorterConfig = ComparatorSorterConfigBase & AnyCompareOptions & AnyComparatorConfig;
