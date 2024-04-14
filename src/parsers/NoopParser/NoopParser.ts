import ParserBase from '../ParserBase';
import { NoopParserConfig, ParseNoopOptions } from './types';

class NoopParser extends ParserBase<any, ParseNoopOptions, NoopParserConfig> {
  /**
   * 種別
   */
  static TYPE = 'noop';

  /**
   * 何もしない
   * @param value 値
   * @returns
   */
  protected _parse(value: any, config: NoopParserConfig): any | null {
    return value;
  }
}
export default NoopParser;
