import { IMatcher } from '../../matchers';
import NumberMatcher from '../../matchers/NumberMatcher';
import MatcherFilterBase, { MatcherFilterConfigBase } from '../MatcherFilterBase';
import { NumberFilterConfig, NumberMatchOptions } from './types';

/**
 * 数値のフィルター
 */
export default class NumberFilter extends MatcherFilterBase<
  number,
  NumberMatchOptions<number>,
  NumberFilterConfig<number>
> {
  /**
   * 種別
   */
  static TYPE = 'number';

  protected _createMatcher(config: MatcherFilterConfigBase): IMatcher {
    return new NumberMatcher(config);
  }
}
