import parse from '../../utils/boolean/parse';
import ParserBase from '../ParserBase';
import { BooleanParseOptions, BooleanParserConfig } from './types';

class BooleanParser extends ParserBase<boolean, BooleanParseOptions, BooleanParserConfig> {
  /**
   * 種別
   */
  static TYPE = 'boolean';

  /**
   * 日付文字列のパース
   * @param value 日付文字列
   * @param config コンフィグ
   * @returns
   */
  protected _parse(value: any, config: BooleanParserConfig): boolean | null {
    return parse(value, config);
  }
}
export default BooleanParser;
