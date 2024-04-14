import compare from '../../utils/string/compare';
import ComparatorBase from '../ComparatorBase';
import { StringComparatorConfig, StringCompareOptions } from './types';

/**
 * 文字列の比較
 */
class StringComparator extends ComparatorBase<string, StringCompareOptions, StringComparatorConfig> {
  /**
   * 種別
   */
  static TYPE = 'string';

  protected _compare(value0: string, value1: string, config: StringComparatorConfig): number {
    return compare(value0, value1, config);
  }
}
export default StringComparator;
