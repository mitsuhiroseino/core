import { IMatcher } from '../../matchers';
import AnyMatcher from '../../matchers/AnyMatcher';
import MatcherFilterBase, { MatcherFilterConfigBase } from '../MatcherFilterBase';
import { AnyFilterConfig, AnyMatchOptions } from './types';

/**
 * 任意のフィルター
 */
export default class AnyFilter<V = unknown> extends MatcherFilterBase<V, AnyMatchOptions<V>, AnyFilterConfig<V>> {
  /**
   * 種別
   */
  static TYPE = 'any';

  protected _createMatcher(config: MatcherFilterConfigBase): IMatcher {
    return new AnyMatcher(config);
  }
}
