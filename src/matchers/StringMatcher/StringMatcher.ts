import match from '@visue/utils/string/match';
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

  protected _match(value1: string, value2: string, config: StringMatcherConfig): boolean {
    return match(value1, value2, config);
  }
}
export default StringMatcher;
