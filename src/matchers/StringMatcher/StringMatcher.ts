import match from '../../utils/string/match';
import MatcherBase from '../MatcherBase';
import { StringMatchOptions, StringMatcherConfig } from './types';

/**
 * 文字列の比較
 */
class StringMatcher extends MatcherBase<string, StringMatchOptions, StringMatcherConfig> {
  /**
   * 種別
   */
  static TYPE = 'string';

  protected _match(value0: string, value1: string, config: StringMatcherConfig): boolean {
    return match(value0, value1, config);
  }
}
export default StringMatcher;
