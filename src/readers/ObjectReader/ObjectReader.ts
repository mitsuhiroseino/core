import ReaderBase from '../ReaderBase';
import { ObjectReadOptions, ObjectReaderConfig } from './types';

/**
 * コンフィグ
 */
class ObjectReader extends ReaderBase<any, ObjectReadOptions, ObjectReaderConfig> {
  /**
   * 種別
   */
  static TYPE = 'object';

  protected _read(data: any, config: ObjectReaderConfig): any {
    return data;
  }
}
export default ObjectReader;
