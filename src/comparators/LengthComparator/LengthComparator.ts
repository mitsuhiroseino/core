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

  protected _compare(value1: any, value2: any, config: LengthComparatorConfig): number {
    return compare(size(value1), size(value2), config);
  }
}
export default LengthComparator;
