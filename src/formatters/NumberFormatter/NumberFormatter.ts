import format from '@visue/utils/number/format';
import FormatterBase from '../FormatterBase';
import { NumberFormatOptions, NumberFormatterConfig } from './types';

class NumberFormatter extends FormatterBase<number, NumberFormatOptions, NumberFormatterConfig> {
  /**
   * 種別
   */
  static TYPE = 'number';

  /**
   * 数値型のフォーマット
   * @param value 数値型の値
   * @param config オプション
   * @returns
   */
  protected _format(value: number, config?: NumberFormatterConfig): string | null {
    return format(value, config);
  }
}
export default NumberFormatter;
