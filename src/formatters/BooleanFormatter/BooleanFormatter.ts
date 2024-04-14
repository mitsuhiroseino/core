import format from '../../utils/boolean/format';
import FormatterBase from '../FormatterBase';
import { BooleanFormatOptions, BooleanFormatterConfig } from './types';

class BooleanFormatter extends FormatterBase<boolean, BooleanFormatOptions, BooleanFormatterConfig> {
  /**
   * 種別
   */
  static TYPE = 'boolean';

  /**
   * 真偽値のフォーマット
   * @param value 真偽値
   * @param config コンフィグ
   * @returns
   */
  protected _format(value: boolean, config?: BooleanFormatOptions): string | null {
    return format(value, config);
  }
}
export default BooleanFormatter;
