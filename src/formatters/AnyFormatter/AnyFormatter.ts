import FormatterBase from '../FormatterBase';
import { AnyFormatOptions, AnyFormatterConfig } from './types';

class AnyFormatter extends FormatterBase<any, AnyFormatOptions, AnyFormatterConfig> {
  /**
   * 種別
   */
  static TYPE = 'any';

  /**
   * 任意のフォーマット
   * @param value 任意の型の値
   * @param config コンフィグ
   * @returns
   */
  protected _format(value: any, config: AnyFormatterConfig): string | null {
    return config.format ? config.format(value, config) : value;
  }
}
export default AnyFormatter;
