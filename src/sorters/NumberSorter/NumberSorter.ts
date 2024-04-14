import { IComparator } from '../../comparators';
import NumberComparator from '../../comparators/NumberComparator';
import ComparatorSorterBase, { ComparatorSorterConfigBase } from '../ComparatorSorterBase';
import { NumberCompareOptions, NumberSorterConfig } from './types';

/**
 * 数値のソーター
 */
export default class NumberSorter extends ComparatorSorterBase<number, NumberCompareOptions, NumberSorterConfig> {
  /**
   * 種別
   */
  static TYPE = 'number';

  protected _createComparator(config: ComparatorSorterConfigBase): IComparator {
    return new NumberComparator(config);
  }
}
