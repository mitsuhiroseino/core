import { IComparator } from '../../comparators';
import StringComparator from '../../comparators/StringComparator';
import ComparatorSorterBase, { ComparatorSorterConfigBase } from '../ComparatorSorterBase';
import { StringCompareOptions, StringSorterConfig } from './types';

/**
 * 文字列のソーター
 */
export default class StringSorter extends ComparatorSorterBase<string, StringCompareOptions, StringSorterConfig> {
  /**
   * 種別
   */
  static TYPE = 'string';

  protected _createComparator(config: ComparatorSorterConfigBase): IComparator {
    return new StringComparator(config);
  }
}
