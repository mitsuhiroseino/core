import get from 'lodash/get';
import isObjectLike from 'lodash/isObjectLike';
import ExtractorBase from '../ExtractorBase';
import { ObjectExtractOptions, ObjectExtractorConfig } from './types';

/**
 * オブジェクト形式の値からの抽出器
 */
class ObjectExtractor<V = any> extends ExtractorBase<any, V, ObjectExtractOptions, ObjectExtractorConfig> {
  /**
   * 種別
   */
  static TYPE = 'object';

  protected _validate(source: any): boolean {
    return isObjectLike(source);
  }

  /**
   * 値の取得
   */
  protected _extract(source: any, config: ObjectExtractorConfig) {
    const path = config.path;
    if (path != null) {
      return get(source, path);
    }
    return;
  }
}
export default ObjectExtractor;
