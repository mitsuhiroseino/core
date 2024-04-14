import { IComparator } from '../../comparators';
import BooleanComparator from '../../comparators/BooleanComparator';
import ComparatorSorterBase, { ComparatorSorterConfigBase } from '../ComparatorSorterBase';
import { BooleanCompareOptions, BooleanSorterConfig } from './types';

/**
 * 真偽値のソーター
 */
export default class BooleanSorter extends ComparatorSorterBase<boolean, BooleanCompareOptions, BooleanSorterConfig> {
  /**
   * 種別
   */
  static TYPE = 'boolean';

  protected _createComparator(config: ComparatorSorterConfigBase): IComparator {
    return new BooleanComparator(config);
  }
}
