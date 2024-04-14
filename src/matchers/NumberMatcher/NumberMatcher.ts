import match from '../../utils/number/match';
import MatcherBase from '../MatcherBase';
import { NumberMatchOptions, NumberMatcherConfig } from './types';

/**
 * 文字列の比較
 */
class NumberMatcher extends MatcherBase<number, NumberMatchOptions, NumberMatcherConfig> {
  /**
   * 種別
   */
  static TYPE = 'number';

  protected _match(value0: number, value1: number, config: NumberMatcherConfig): boolean {
    return match(value0, value1, config);
  }
}
export default NumberMatcher;
