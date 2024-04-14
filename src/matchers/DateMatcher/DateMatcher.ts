import match from '../../utils/date/match';
import MatcherBase from '../MatcherBase';
import { DateMatchOptions, DateMatcherConfig } from './types';

/**
 * 文字列の比較
 */
class DateMatcher extends MatcherBase<Date, DateMatchOptions, DateMatcherConfig> {
  /**
   * 種別
   */
  static TYPE = 'date';

  protected _match(value0: Date, value1: Date, config: DateMatcherConfig): boolean {
    return match(value0, value1, config);
  }
}
export default DateMatcher;
