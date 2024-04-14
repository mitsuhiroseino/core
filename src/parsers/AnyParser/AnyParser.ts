import ParserBase from '../ParserBase';
import { AnyParseOptions, AnyParserConfig } from './types';

class AnyParser extends ParserBase<any, AnyParseOptions, AnyParserConfig> {
  /**
   * 種別
   */
  static TYPE = 'any';

  /**
   * 任意のパース
   * @param value 任意の値
   * @param config コンフィグ
   * @returns
   */
  protected _parse(value: any, config: AnyParserConfig): any | null {
    return config.parse ? config.parse(value, config) : value;
  }
}
export default AnyParser;
