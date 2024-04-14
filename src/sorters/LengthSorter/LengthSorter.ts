import { IComparator } from '../../comparators';
import LengthComparator from '../../comparators/LengthComparator';
import ComparatorSorterBase, { ComparatorSorterConfigBase } from '../ComparatorSorterBase';
import { LengthCompareOptions, LengthSorterConfig } from './types';

/**
 * 文字列、配列の長さ、オブジェクト要素数のソーター
 */
export default class LengthSorter extends ComparatorSorterBase<any, LengthCompareOptions, LengthSorterConfig> {
  /**
   * 種別
   */
  static TYPE = 'length';

  protected _createComparator(config: ComparatorSorterConfigBase): IComparator {
    return new LengthComparator(config);
  }
}
