import parse from '@visue/utils/number/parse';
import ParserBase from '../ParserBase';
import { NumberParseOptions, NumberParserConfig } from './types';

class NumberParser extends ParserBase<number, NumberParseOptions, NumberParserConfig> {
  /**
   * 種別
   */
  static TYPE = 'number';

  /**
   * 数値文字列のパース
   * @param value 数値文字列
   * @param config コンフィグ
   * @returns
   */
  protected _parse(value: any, config: NumberParserConfig): number | null {
    return parse(value, config);
  }
}
export default NumberParser;
