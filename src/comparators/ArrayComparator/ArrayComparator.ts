import compare from '@visue/utils/array/compare';
import ComparatorBase from '../ComparatorBase';
import { ArrayComparatorConfig, ArrayCompareOptions } from './types';

/**
 * 配列の比較
 */
class ArrayComparator extends ComparatorBase<any[], ArrayCompareOptions, ArrayComparatorConfig> {
  /**
   * 種別
   */
  static TYPE = 'array';

  protected _compare(value1: any[], value2: any[], config: ArrayComparatorConfig): number {
    return compare(value1, value2, config);
  }
}
export default ArrayComparator;
