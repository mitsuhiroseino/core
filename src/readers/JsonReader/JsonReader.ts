import ReaderBase from '../ReaderBase';
import { JsonReadOptions, JsonReaderConfig } from './types';

/**
 *
 */
class JsonReader extends ReaderBase<string, JsonReadOptions, JsonReaderConfig> {
  /**
   * 種別
   */
  static TYPE = 'json';

  protected _read(data: string, config: JsonReaderConfig): any {
    return JSON.parse(data, config.reviver);
  }
}
export default JsonReader;
