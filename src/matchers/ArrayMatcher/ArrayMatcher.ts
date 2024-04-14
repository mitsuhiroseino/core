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

  protected _match(value0: any[], value1: any[], config: ArrayMatcherConfig): boolean {
    return match(value0, value1, config);
  }
}
export default ArrayMatcher;
