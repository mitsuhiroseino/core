import compare from '../../utils/date/compare';
import ComparatorBase from '../ComparatorBase';
import { DateComparatorConfig, DateCompareOptions } from './types';

/**
 * 日時の比較
 */
class DateComparator extends ComparatorBase<Date, DateCompareOptions, DateComparatorConfig> {
  /**
   * 種別
   */
  static TYPE = 'date';

  protected _compare(value0: Date, value1: Date, config: DateComparatorConfig): number {
    return compare(value0, value1, config);
  }
}
export default DateComparator;
