import { IComparator } from '../../comparators';
import AnyComparator from '../../comparators/AnyComparator';
import ComparatorSorterBase, { ComparatorSorterConfigBase } from '../ComparatorSorterBase';
import { AnyCompareOptions, AnySorterConfig } from './types';

/**
 * 任意のソーター
 */
export default class AnySorter extends ComparatorSorterBase<any, AnyCompareOptions, AnySorterConfig> {
  /**
   * 種別
   */
  static TYPE = 'any';

  protected _createComparator(config: ComparatorSorterConfigBase): IComparator {
    return new AnyComparator(config);
  }
}
