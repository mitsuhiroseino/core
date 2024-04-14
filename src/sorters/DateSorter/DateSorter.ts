import { IComparator } from '../../comparators';
import DateComparator from '../../comparators/DateComparator';
import ComparatorSorterBase, { ComparatorSorterConfigBase } from '../ComparatorSorterBase';
import { DateCompareOptions, DateSorterConfig } from './types';

/**
 * 日時のソーター
 */
export default class DateSorter extends ComparatorSorterBase<Date, DateCompareOptions, DateSorterConfig> {
  /**
   * 種別
   */
  static TYPE = 'date';

  protected _createComparator(config: ComparatorSorterConfigBase): IComparator {
    return new DateComparator(config);
  }
}
