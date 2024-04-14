import format from '../../utils/object/format';
import FormatterBase from '../FormatterBase';
import { ObjectFormatOptions, ObjectFormatterConfig } from './types';

class ObjectFormatter extends FormatterBase<any, ObjectFormatOptions, ObjectFormatterConfig> {
  /**
   * 種別
   */
  static TYPE = 'object';

  /**
   * オブジェクト型のフォーマット
   * @param value オブジェクト型の値
   * @param config コンフィグ
   * @returns
   */
  protected _format(value: any, config?: ObjectFormatterConfig): string | null {
    return format(value, config);
  }
}
export default ObjectFormatter;
