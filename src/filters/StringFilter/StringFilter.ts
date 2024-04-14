import { IMatcher } from '../../matchers';
import StringMatcher from '../../matchers/StringMatcher';
import MatcherFilterBase, { MatcherFilterConfigBase } from '../MatcherFilterBase';
import { StringFilterConfig, StringMatchOptions } from './types';

/**
 * 文字列のフィルター
 */
export default class StringFilter extends MatcherFilterBase<
  string,
  StringMatchOptions<string>,
  StringFilterConfig<string>
> {
  /**
   * 種別
   */
  static TYPE = 'string';

  protected _createMatcher(config: MatcherFilterConfigBase): IMatcher {
    return new StringMatcher(config);
  }
}
