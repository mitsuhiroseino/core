import compare from '@visue/utils/number/compare';
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

  protected _compare(value1: number, value2: number, config: NumberComparatorConfig): number {
    return compare(value1, value2, config);
  }
}
export default NumberComparator;
