import compare from '../../utils/array/compare';
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

  protected _compare(value0: any[], value1: any[], config: ArrayComparatorConfig): number {
    return compare(value0, value1, config);
  }
}
export default ArrayComparator;
