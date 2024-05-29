import match from '../../utils/number/match';
import MatcherBase from '../MatcherBase';
import { NumberMatchOptions, NumberMatcherConfig } from './types';

/**
 * 数値の比較
 */
class NumberMatcher extends MatcherBase<number, NumberMatchOptions, NumberMatcherConfig> {
  /**
   * 種別
   */
  static TYPE = 'number';

  protected _match(value1: number, value2: number, config: NumberMatcherConfig): boolean {
    return match(value1, value2, config);
  }
}
export default NumberMatcher;
