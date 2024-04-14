import size from 'lodash/size';

import compare from '../../utils/number/compare';
import ComparatorBase from '../ComparatorBase';
import { LengthComparatorConfig, LengthCompareOptions } from './types';

/**
 * 文字列、配列の長さ、オブジェクトの要素数の比較
 */
class LengthComparator extends ComparatorBase<any, LengthCompareOptions, LengthComparatorConfig> {
  /**
   * 種別
   */
  static TYPE = 'length';

  protected _compare(value0: any, value1: any, config: LengthComparatorConfig): number {
    return compare(size(value0), size(value1), config);
  }
}
export default LengthComparator;
