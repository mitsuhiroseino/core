import compare from '../../utils/number/compare';
import ComparatorBase from '../ComparatorBase';
import { NumberComparatorConfig, NumberCompareOptions } from './types';

/**
 * 数値の比較
 */
class NumberComparator extends ComparatorBase<number, NumberCompareOptions, NumberComparatorConfig> {
  /**
   * 種別
   */
  static TYPE = 'number';

  protected _compare(value0: number, value1: number, config: NumberComparatorConfig): number {
    return compare(value0, value1, config);
  }
}
export default NumberComparator;
