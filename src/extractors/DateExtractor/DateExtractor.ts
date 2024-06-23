import formatDate from '@visue/utils/date/format';
import isVaidDate from '@visue/utils/date/isValidDate';
import ExtractorBase from '../ExtractorBase';
import { DateExtractOptions, DateExtractorConfig } from './types';

/**
 * 日付形式の値からの抽出器
 */
class DateExtractor<V = string | number> extends ExtractorBase<Date, V, DateExtractOptions, DateExtractorConfig> {
  /**
   * 種別
   */
  static TYPE = 'date';

  protected _validate(source: Date): boolean {
    return isVaidDate(source);
  }

  /**
   * 日付を数値または文字列に変換して取得
   */
  protected _extract(source: Date, config: DateExtractorConfig): V | null | undefined {
    const { toNumber, format = 'yyyyMMddHHmmssSSS', ...rest } = config;
    let result: any = formatDate(source, { format, ...rest });
    if (result != null && toNumber) {
      return Number(result) as V;
    } else {
      return result;
    }
  }
}
export default DateExtractor;
