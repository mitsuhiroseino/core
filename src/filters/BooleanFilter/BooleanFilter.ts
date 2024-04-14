import { IMatcher } from '../../matchers';
import BooleanMatcher from '../../matchers/BooleanMatcher';
import MatcherFilterBase, { MatcherFilterConfigBase } from '../MatcherFilterBase';
import { BooleanFilterConfig, BooleanMatchOptions } from './types';

/**
 * 真偽値のフィルター
 */
export default class BooleanFilter extends MatcherFilterBase<
  boolean,
  BooleanMatchOptions<boolean>,
  BooleanFilterConfig<boolean>
> {
  /**
   * 種別
   */
  static TYPE = 'boolean';

  protected _createMatcher(config: MatcherFilterConfigBase): IMatcher {
    return new BooleanMatcher(config);
  }
}
