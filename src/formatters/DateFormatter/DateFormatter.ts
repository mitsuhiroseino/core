import format from '@visue/utils/date/format';
import FormatterBase from '../FormatterBase';
import { DateFormatOptions, DateFormatterConfig } from './types';

class DateFormatter extends FormatterBase<Date, DateFormatOptions, DateFormatterConfig> {
  /**
   * 種別
   */
  static TYPE = 'date';

  /**
   * 日付型のフォーマット
   * @param value 日付型の値
   * @param config コンフィグ
   * @returns
   */
  protected _format(value: Date, config?: DateFormatterConfig): string | null {
    return format(value, config);
  }
}
export default DateFormatter;
