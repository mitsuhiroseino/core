import { IMatcher } from '../../matchers';
import ArrayMatcher from '../../matchers/ArrayMatcher';
import MatcherFilterBase, { MatcherFilterConfigBase } from '../MatcherFilterBase';
import { ArrayFilterConfig, ArrayMatchOptions } from './types';

/**
 * 配列のフィルター
 */
export default class ArrayFilter extends MatcherFilterBase<any[], ArrayMatchOptions<any[]>, ArrayFilterConfig<any[]>> {
  /**
   * 種別
   */
  static TYPE = 'array';

  protected _createMatcher(config: MatcherFilterConfigBase): IMatcher {
    return new ArrayMatcher(config);
  }
}
