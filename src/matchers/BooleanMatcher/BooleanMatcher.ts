import match from '../../utils/boolean/match';
import MatcherBase from '../MatcherBase';
import { BooleanMatchOptions, BooleanMatcherConfig } from './types';

/**
 * 文字列の比較
 */
class BooleanMatcher extends MatcherBase<boolean, BooleanMatchOptions, BooleanMatcherConfig> {
  /**
   * 種別
   */
  static TYPE = 'boolean';

  protected _match(value0: boolean, value1: boolean, config: BooleanMatcherConfig): boolean {
    return match(value0, value1, config);
  }
}
export default BooleanMatcher;
