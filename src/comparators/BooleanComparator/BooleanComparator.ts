import compare from '../../utils/boolean/compare';
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

  protected _compare(value0: boolean, value1: boolean, config: BooleanComparatorConfig): number {
    return compare(value0, value1, config);
  }
}
export default BooleanComparator;
