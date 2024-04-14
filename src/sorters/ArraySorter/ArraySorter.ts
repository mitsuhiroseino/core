import { IComparator } from '../../comparators';
import ArrayComparator from '../../comparators/ArrayComparator';
import ComparatorSorterBase, { ComparatorSorterConfigBase } from '../ComparatorSorterBase';
import { ArrayCompareOptions, ArraySorterConfig } from './types';

/**
 * 配列のソーター
 */
export default class ArraySorter extends ComparatorSorterBase<any[], ArrayCompareOptions, ArraySorterConfig> {
  /**
   * 種別
   */
  static TYPE = 'array';

  protected _createComparator(config: ComparatorSorterConfigBase): IComparator {
    return new ArrayComparator(config);
  }
}
