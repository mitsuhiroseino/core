import match from '../../utils/array/match';
import MatcherBase from '../MatcherBase';
import { ArrayMatchOptions, ArrayMatcherConfig } from './types';

/**
 * 文字列の比較
 */
class ArrayMatcher extends MatcherBase<any[], ArrayMatchOptions, ArrayMatcherConfig> {
  /**
   * 種別
   */
  static TYPE = 'array';

  protected _match(value1: any[], value2: any[], config: ArrayMatcherConfig): boolean {
    return match(value1, value2, config);
  }
}
export default ArrayMatcher;
