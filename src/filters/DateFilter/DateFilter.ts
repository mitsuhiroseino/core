import { IMatcher } from '../../matchers';
import DateMatcher from '../../matchers/DateMatcher';
import MatcherFilterBase, { MatcherFilterConfigBase } from '../MatcherFilterBase';
import { DateFilterConfig, DateMatchOptions } from './types';

/**
 * 日時のフィルター
 */
export default class DateFilter extends MatcherFilterBase<Date, DateMatchOptions<Date>, DateFilterConfig<Date>> {
  /**
   * 種別
   */
  static TYPE = 'date';

  protected _createMatcher(config: MatcherFilterConfigBase): IMatcher {
    return new DateMatcher(config);
  }
}
