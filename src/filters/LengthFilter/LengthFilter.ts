import { IMatcher } from '../../matchers';
import LengthMatcher from '../../matchers/LengthMatcher';
import MatcherFilterBase, { MatcherFilterConfigBase } from '../MatcherFilterBase';
import { LengthFilterConfig, LengthMatchOptions } from './types';

/**
 * 文字列、配列の長さ、オブジェクトの要素数のフィルター
 */
export default class LengthFilter extends MatcherFilterBase<any, LengthMatchOptions<any>, LengthFilterConfig<any>> {
  /**
   * 種別
   */
  static TYPE = 'length';

  protected _createMatcher(config: MatcherFilterConfigBase): IMatcher {
    return new LengthMatcher(config);
  }
}
