import parse from '@visue/utils/object/parse';
import ParserBase from '../ParserBase';
import { ObjectParseOptions, ObjectParserConfig } from './types';

class ObjectParser extends ParserBase<any, ObjectParseOptions, ObjectParserConfig> {
  /**
   * 種別
   */
  static TYPE = 'object';

  /**
   * オブジェクトへのパース
   * @param value JSON文字列
   * @param config コンフィグ
   * @returns
   */
  protected _parse(value: any, config: ObjectParserConfig): any | null {
    return parse(value, config);
  }
}
export default ObjectParser;
