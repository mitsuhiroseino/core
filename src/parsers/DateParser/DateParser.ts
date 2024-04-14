import parse from '../../utils/date/parse';
import ParserBase from '../ParserBase';
import { DateParseOptions, DateParserConfig } from './types';

class DateParser extends ParserBase<Date, DateParseOptions, DateParserConfig> {
  /**
   * 種別
   */
  static TYPE = 'date';

  /**
   * 日付文字列のパース
   * @param value 日付文字列
   * @param config コンフィグ
   * @returns
   */
  protected _parse(value: any, config: DateParserConfig): Date | null {
    return parse(value, config);
  }
}
export default DateParser;
