import compare from '@visue/utils/boolean/compare';
import ComparatorBase from '../ComparatorBase';
import { BooleanComparatorConfig, BooleanCompareOptions } from './types';

/**
 * 真偽値の比較
 */
class BooleanComparator extends ComparatorBase<boolean, BooleanCompareOptions, BooleanComparatorConfig> {
  /**
   * 種別
   */
  static TYPE = 'boolean';

  protected _compare(value1: boolean, value2: boolean, config: BooleanComparatorConfig): number {
    return compare(value1, value2, config);
  }
}
export default BooleanComparator;
