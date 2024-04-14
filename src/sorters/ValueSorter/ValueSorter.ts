import SorterBase from '../SorterBase';
import { ValueCompareOptions, ValueSorterConfig } from './types';

/**
 * 値の比較
 */
export default class ValueSorter extends SorterBase<any, ValueCompareOptions, ValueSorterConfig> {
  /**
   * 種別
   */
  static TYPE = 'value';

  protected _compare(value0: any, value1: any, config: ValueSorterConfig): number {
    return value0 === value1 ? 0 : value0 > value1 ? 1 : -1;
  }
}
