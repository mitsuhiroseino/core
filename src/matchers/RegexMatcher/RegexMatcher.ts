import isRegExp from 'lodash/isRegExp';
import isString from 'lodash/isString';

import MatcherBase from '../MatcherBase/MatcherBase';
import { RegexMatchOptions, RegexMatcherConfig } from './types';

/**
 * 値0が正規表現(値1)に一致するか
 */
class RegexMatcher extends MatcherBase<string | RegExp, RegexMatchOptions, RegexMatcherConfig> {
  /**
   * 種別
   */
  static TYPE = 'regex';

  /**
   * 代替種別
   */
  static ALTS = ['re', 'regexp'];

  protected _match(value0: string, value1: string | RegExp, config: RegexMatcherConfig): boolean {
    if (isString(value0)) {
      let regex: RegExp | null = null;
      if (isRegExp(value1)) {
        regex = value1;
      } else if (isString(value1)) {
        regex = new RegExp(value1, config.flags);
      }
      if (regex) {
        return regex.test(value0);
      }
    }
    return false;
  }
}
export default RegexMatcher;
