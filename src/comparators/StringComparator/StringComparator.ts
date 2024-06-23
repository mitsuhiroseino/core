import compare from '@visue/utils/string/compare';
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

  protected _compare(value1: string, value2: string, config: StringComparatorConfig): number {
    return compare(value1, value2, config);
  }
}
export default StringComparator;
