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

  protected _match(value1: Date, value2: Date, config: DateMatcherConfig): boolean {
    return match(value1, value2, config);
  }
}
export default DateMatcher;
