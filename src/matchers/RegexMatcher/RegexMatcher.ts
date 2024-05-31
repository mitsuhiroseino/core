import isRegExp from 'lodash/isRegExp';
import isString from 'lodash/isString';
import MatcherBase from '../MatcherBase/MatcherBase';
import { RegexMatchOptions, RegexMatcherConfig } from './types';

/**
 * 値1が正規表現(値2)に一致するか
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

  protected _match(value1: string, value2: string | RegExp, config: RegexMatcherConfig): boolean {
    if (isString(value1)) {
      let regex: RegExp | null = null;
      if (isRegExp(value2)) {
        regex = value2;
      } else if (isString(value2)) {
        regex = new RegExp(value2, config.flags);
      }
      if (regex) {
        return regex.test(value1);
      }
    }
    return false;
  }
}
export default RegexMatcher;
