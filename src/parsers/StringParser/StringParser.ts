import ParserBase from '../ParserBase';
import { StringParseOptions, StringParserConfig } from './types';

class StringParser extends ParserBase<string, StringParseOptions, StringParserConfig> {
  /**
   * 種別
   */
  static TYPE = 'string';

  /**
   * 文字列のパース(何もしない)
   * @param value 文字列
   * @returns
   */
  protected _parse(value: any): string | null {
    return value;
  }
}
export default StringParser;
